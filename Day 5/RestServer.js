/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');
    var winston = require('winston');
    winston.level = 'silly';

    var mongoURL = 'mongodb://localhost/test';
    // Connect with MongoDB server
    mongoose.connect(mongoURL);
    var db = mongoose.connection;
    db.on('error', function (error) {
        winston.error(error.message);
    });
    db.once('open', function () {
        winston.info('Connected with mongodb on ', mongoURL);
    });
    app.use(function (req, res, next) {
        console.log("Request: ", req.url);
        next();
    });
    require('./routeMapping')(app);
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);