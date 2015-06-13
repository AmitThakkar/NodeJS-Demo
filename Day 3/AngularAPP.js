/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    app.use(function (req, res, next) {
        console.log("Request: ", req.url);
        next();
    });
    app.use(express.static('public'));
    app.use(express.static('node_modules'));
    app.get('/', function (req, res) {
        res.status(200).send("Hello World");
    });
    app.get('/me', function (req, res) {
        res.status(200).send("This is me");
    });
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);