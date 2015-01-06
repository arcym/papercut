var gulp = require("gulp");
var gulp_sass = require("gulp-sass");
var gulp_autoprefixer = require("gulp-autoprefixer");
var gulp_git = require("gulp-git");

var stream = require("vinyl-source-stream");
var process = require("child-process-promise");

var browserify = require("browserify");
var reactify = require("reactify");
var aliasify = require("aliasify");

gulp.task("markup", function()
{
    gulp.src("./source/index.html")
        .pipe(gulp.dest("./builds/"))
});

gulp.task("styles", function()
{
    gulp.src("./source/index.scss")
        .pipe(gulp_sass())
        .pipe(gulp_autoprefixer())
        .pipe(gulp.dest("./builds/"))
});

gulp.task("scripts", function()
{
    browserify("./source/index.js")
        .transform("reactify")
        .transform("aliasify")
        .bundle()
        .pipe(stream("index.js"))
        .pipe(gulp.dest("./builds/"))
});

gulp.task("assets", function()
{
    gulp.src("./source/assets/**/*.*")
        .pipe(gulp.dest("./builds/assets/"))
});

gulp.task("default", function()
{
    gulp.start(["markup", "styles", "scripts", "assets"]);
});
