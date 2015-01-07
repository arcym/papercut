var pkg = require("./package.json")

var gulp = require("gulp")
var gulp_sass = require("gulp-sass")
var gulp_autoprefixer = require("gulp-autoprefixer")
var gulp_zip = require("gulp-zip")

var fs = require("fs")
var del = require("del")

var stream = require("vinyl-source-stream")
var process = require("child-process-promise")

var browserify = require("browserify")
var reactify = require("reactify")
var aliasify = require("aliasify")

var NodeWebkit = require("node-webkit-builder")

var build = new function()
{
    this.markup = function(dir)
    {
        gulp.src("./source/index.html")
            .pipe(gulp.dest("./builds/" + dir + "/"))
    }
    
    this.scripts = function(dir)
    {
        browserify("./source/index.js")
            .transform("reactify")
            .transform("aliasify")
            .bundle()
            .pipe(stream("index.js"))
            .pipe(gulp.dest("./builds/" + dir + "/"))
    }
    
    this.styles = function(dir)
    {
        gulp.src("./source/index.scss")
            .pipe(gulp_sass())
            .pipe(gulp_autoprefixer())
            .pipe(gulp.dest("./builds/" + dir + "/"))
    }
    
    this.assets = function(dir)
    {
        gulp.src("./source/assets/**/*.*")
            .pipe(gulp.dest("./builds/" + dir + "/assets/"))
    }
    
    this.metadata = function(dir)
    {
        gulp.src("./package.json")
            .pipe(gulp.dest("./builds/" + dir + "/"))
    }
    
    //todo: make these compatible with jitterbug!
}

gulp.task("bump", function()
{
    //todo: bump the version number
    //todo: save as a tag in github
})

gulp.task("build:gh", function()
{
    del(["./builds/gh"], function()
    {
        build.markup("gh")
        build.scripts("gh")
        build.styles("gh")
        build.assets("gh")
        build.metadata("gh")
        
        //cd builds
        //git init
        //git remote add origin https://github.com/arcym/papercut.git
        //git checkout -b gh-pages
        //git add --all
        //git commit -m "Deploying to Github."
        //git push origin gh-pages -f
        //cd ..
    })
})

gulp.task("build:nw", function()
{
    var nw = new NodeWebkit({
        files: "./builds/gh/**/*",
        platforms: ["win", "osx", "linux"],
        cacheDir: "./node_webkit_partials",
        buildDir: "./node_webkit_builds"
    })
    
    nw.build().then(function()
    {
        fs.readdir("./node_webkit_builds/" + pkg.name, function(error, dirs)
        {
            for(var index = 0; index < dirs.length; index++) {
                var dirpath = "./node_webkit_builds/" + pkg.name + "/" + dirs[index] + "/**/*"
                var filename = pkg.name + " - v" + pkg.version + " - " + dirs[index] + ".zip"
                
                gulp.src(dirpath)
                    .pipe(gulp_zip(filename))
                    .pipe(gulp.dest("./builds/nw/"))
            }
        })
    })
    
    //todo: delete ./node_webkit_builds when done
})

gulp.task("default", ["build:gh"])
