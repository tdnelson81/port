//many servers are big monsters of code and configuration,
//this server has all components that are common to all servers

//take a look at each line and make a guess as to what each line does
//work with a person next to you and use the context/vocabulary words 
//to guess at the purpose of each line

// Web search -- imports package required for your server
var http = require("http");

// a port is a logical place where computer listens for requests
var goodPORT = 7000;
var badPORT = 7500;

// function to listen for request, processes request, and produces response
function handleRequest(request, response) {

  // this is the response if query worked, and produces response
  response.end("It Works!! Path Hit: " + request.url);
}

// 
var server = http.createServer(handleRequest);
// starts the server and begins listening on the port 8080
server.listen(goodPORT, function() {
  //  console log that tells you that the server has started
  console.log("That's a nice shirt");
});


var server = http.createServer(handleRequest);
// starts the server and begins listening on the port 8080
server.listen(badPORT, function() {
  //  console log that tells you that the server has started
  console.log("Your breath smells");
});