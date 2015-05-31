/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    app.use("/me", function (req, res, next) {
        // Here we are getting req.originalUrl instead of req.url
        console.log("Request: ", req.originalUrl);
        next();
    });
    app.get('/', function (req, res) {
        res.send("Hello World");
    });
    app.get('/me', function (req, res) {
        res.send("This is me");
    });
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);