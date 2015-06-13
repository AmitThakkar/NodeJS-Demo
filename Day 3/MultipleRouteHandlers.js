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
    app.get('/', function (req, res, next) {
        console.log("111");
        next();
    }, function (req, res, next) {
        console.log("222");
        next();
    }, function (req, res) {
        console.log("333");
        res.status(200).send("Hello World");
    });
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);