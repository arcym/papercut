var gulp = require("gulp");
var gulp_sass = require("gulp-sass");
var gulp_autoprefixer = require("gulp-autoprefixer");
var gulp_git = require("gulp-git");

var del = require("del");
var stream = require("vinyl-source-stream");
var process = require("child-process-promise");

var browserify = require("browserify");
var reactify = require("reactify");
var aliasify = require("aliasify");

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

gulp.task("build:gh", function()
{
    del(["./builds/gh"], function()
    {
        build.markup("gh")
        build.scripts("gh")
        build.styles("gh")
        build.assets("gh")
    })
})

gulp.task("build:nw", function()
{
    del(["./builds/nw"], function()
    {
        build.markup("nw")
        build.scripts("nw")
        build.styles("nw")
        build.assets("nw")
        build.metadata("nw")
    })
})

gulp.task("deploy:nw", function()
{
    var nw = new NodeWebkitBuilder({
        files: "./builds/nw/**/*",
        platforms: [
            "win32", "win64",
            "osx32", "osx64",
            "linux32", "linux64"
        ],
        buildType: "versioned"
    })
    
    nw.on("log", console.log)
    
    nw.build().then(function () {
        console.log("BAM!!");
    }).catch(function (error) {
        console.error(error);
    });
})

gulp.task("default", ["build:nw"])
