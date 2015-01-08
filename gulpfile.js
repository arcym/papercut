var gulp = require("gulp")
var del = require("del")

var buildpipe = require("./buildpipe")

gulp.task("default", function()
{
    del(["./builds"], function()
    {
        buildpipe.markup().pipe(gulp.dest("./builds"))
        buildpipe.scripts().pipe(gulp.dest("./builds"))
        buildpipe.styles().pipe(gulp.dest("./builds"))
        buildpipe.assets().pipe(gulp.dest("./builds"))
        buildpipe.configs().pipe(gulp.dest("./builds"))
    })
})
