/**
 * Created by Amit Thakkar on 16/05/15.
 */
(function(require) {
    var http = require("http");
    var requestHandler = function (request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    };
    var server = http.createServer(requestHandler);
    server.listen(9999, function() {
        console.log('Server running at http://localhost:9999/');
    });
})(require);