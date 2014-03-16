var http = require("http");
var url = require("url");
var fs = require("fs");
var qs = require('querystring');
var Dictionary = require('../common/Dictionary');

function Format(String)
{
	while(String.indexOf("%20") != -1)
	{
		String = String.replace("%20", " ");
	}

	return String;
}

function onRequest(request, response)
{
	//is the folder acessed
	var path = url.parse(request.url).pathname;

	//is the query of the search accessed 
	var user = qs.parse(url.parse(request.url).query)["user"];
	var data = qs.parse(url.parse(request.url).query)["data"];

	if(user != null && data != null)
	{
		//replaces the annoying %20 with a space
		user = Format(user);
		data = Format(data);

		Dictionary.Cache(user, data);

		response.writeHead(201, {"Content-Type": "text/plain"});
		for(i = 0; i < Dictionary.Input.length; i++)
		{
			response.write("{" + Dictionary.Input[i] + ":" + Dictionary.Output[i] + "}");
		}
		response.end();
	}
	else
	{
		//response to show the user that they failed
		response.writeHead(400);
		response.end();
	}
}

//server port here...if on the saas server: 443 if local: 80
http.createServer(onRequest).listen(443);