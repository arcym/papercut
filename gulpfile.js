var gulp = require("gulp")
var gulp_sass = require("gulp-sass")
var gulp_autoprefixer = require("gulp-autoprefixer")

var del = require("del")
var stream = require("vinyl-source-stream")
var process = require("child-process-promise")

var browserify = require("browserify")
var reactify = require("reactify")
var aliasify = require("aliasify")

var NodeWebkitBuilder = require("node-webkit-builder")

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
}

gulp.task("build", function()
{
    del(["./builds/raw"], function()
    {
        build.markup("raw")
        build.scripts("raw")
        build.styles("raw")
        build.assets("raw")
        build.metadata("raw")
    })
})

gulp.task("build:nw", function()
{
    new NodeWebkitBuilder({
        files: "./builds/raw/**/*",
        platforms: [
            "win32",
            "win64"
        ],
        buildDir: "./builds/nw",
        cacheDir: "./node_webkit_partials"
        buildType: "versioned",
    }).build()
})

gulp.task("default", ["build"])
