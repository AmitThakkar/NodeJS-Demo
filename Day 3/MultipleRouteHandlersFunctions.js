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
    var route1Handler = function (req, res, next) {
        console.log("111");
        next();
    };
    var route2Handler = function (req, res, next) {
        console.log("222");
        next();
    };
    var route3Handler = function (req, res) {
        console.log("333");
        res.status(200).send("Hello World");
    };
    app.get('/', route1Handler, route2Handler, route3Handler);
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);