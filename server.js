var fs = require("fs")
var express = require("express")
var buildpipe = require("./buildpipe")

var throughto = function(stream)
{
    var through = require("through");
    
    function write(data)
    {
        stream.write(data.contents);
    }

    function end()
    {
        stream.end();
    }
    
    return through(write, end);
}

server = express();

server.get("/index.js", function(request, response, next)
{
    response.set("Content-Type", "text/javascript");
    buildpipe.scripts().pipe(throughto(response)) //todo!!
})

server.get("/index.css", function(request, response, next)
{
    response.set("Content-Type", "text/css")
    buildpipe.styles().pipe(throughto(response))
})

server.use(express.static("./source"));

server.listen(1271, function()
{
    console.log("The server is listening.");
});
