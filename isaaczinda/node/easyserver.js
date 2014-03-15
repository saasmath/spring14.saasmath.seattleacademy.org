var http = require("http");
var url = require("url");
var fs = require("fs");
var qs = require('querystring');

function onRequest(request, response)
{
	//is the folder acessed
	var path = url.parse(request.url).pathname;

	//appends the query to a file
	console.log("Recieved Request: " + path);

}

//server port here...
http.createServer(onRequest).listen(443);

console.log("Server Running...");