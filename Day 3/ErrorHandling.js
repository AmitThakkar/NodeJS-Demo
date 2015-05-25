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
    app.get('/', function (req, res, next) {
        console.log("111");
        //next();
        next(new Error("Testings"));
    }, function (req, res, next) {
        console.log("222");
        next();
    }, function (req, res) {
        console.log("333");
        res.send("Hello World");
    }, function (error, req, res, next) {
        console.log("444");
        //next();
        next(error);
    }, function (req, res, next) {
        console.log("555");
        res.send("Hello World");
    }, function (error, req, res, next) {
        console.log("666");
        res.send("Error Handled Hello World");
    });
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);