var gulp = require("gulp");
var gulp_sass = require("gulp-sass");
var gulp_autoprefixer = require("gulp-autoprefixer");

var stream = require("vinyl-source-stream");

var browserify = require("browserify");
var reactify = require("reactify");
var aliasify = require("aliasify");

gulp.task("markup", function() {
    return gulp.src("./source/index.html")
               .pipe(gulp.dest("./build/"))
});

gulp.task("styles", function() {
    return gulp.src("./source/index.scss")
               .pipe(gulp_sass())
               .pipe(gulp_autoprefixer())
               .pipe(gulp.dest("./build/"))
});

gulp.task("scripts", function() {
    return browserify("./source/index.js")
               .transform("reactify")
               .transform(aliasify.configure({
                    configDir: __dirname,
                    verbose: false,
                    aliases: {
                        "<root>": "./source"
                    }
                }))
               .bundle()
               .pipe(stream("index.js"))
               .pipe(gulp.dest("./build/"))
});

gulp.task("assets", function() {
    return gulp.src("./source/assets/**/*")
               .pipe(gulp.dest("./build/assets/"))
});

gulp.task("default", function() {
    gulp.start("markup", "styles", "scripts", "assets");
});
