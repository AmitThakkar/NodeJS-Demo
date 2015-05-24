/**
 * Created by Amit Thakkar on 16/05/15.
 */
(function (require) {
    var http = require("http");
    var requestHandler = function (request, response) {
        var data = "";
        switch (request.url) {
            case "/" :
                switch (request.method) {
                    case "GET":
                        data = "HelloWorld From GET Request";
                        break;
                    case "POST":
                        data = "HelloWorld From POST Request";
                        break;
                    case "PUT":
                        data = "HelloWorld From PUT Request";
                        break;
                    case "DELETE":
                        data = "HelloWorld From DELETE Request";
                        break;
                }
                break;
            case "/me" :
                switch (request.method) {
                    case "GET":
                        data = "This is me From GET Request";
                        break;
                    case "POST":
                        data = "This is me From POST Request";
                        break;
                    case "PUT":
                        data = "This is me From PUT Request";
                        break;
                    case "DELETE":
                        data = "This is me From DELETE Request";
                        break;
                }
                data = "This is Me!";
                break;
            default :
                data = "You lose in space";
        }
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(data);
        response.end();
    };
    var server = http.createServer(requestHandler);
    server.listen(9999, function () {
        console.log('Server running at http://localhost:9999/');
    });
})(require);