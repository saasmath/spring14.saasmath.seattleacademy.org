var http = require("http");
var url = require("url");
var fs = require("fs");
var qs = require('querystring');

function onRequest(request, response)
{
	//is the folder acessed
	var path = url.parse(request.url).pathname;


	//is the query of the search accessed 
	var query = url.parse(request.url).query;
	//console.log(query);

	if(query != null)
	{
		//replaces the annoying %20 with a space
		while(query.indexOf("%20") != -1)
		{
			query = query.replace("%20", " ");
		}

		fs.appendFile("Log.txt", query + "\r\n", function(error)
		{
			//response to show the user what they wrote
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write("<h1>Wrote Data to the Server</h1>");
			response.write("<h4>'" + query + "' was written</h4>");
			response.end();
		});
	}
	else
	{
		//response to show the user that they failed
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<h1>Failure to Write</h1>");
		response.write("<h4>No Data to Send.</h4>");
		response.end();
	}
}

//server port here...if on the saas server: 443 if local: 80
http.createServer(onRequest).listen(443);