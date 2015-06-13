/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');
    var winston = require('winston');
    winston.level = 'silly';

    winston.silly('1st Level');
    winston.debug('2nd Level');
    winston.verbose('3rd Level');
    winston.info('4th Level');
    winston.warn('5th Level');
    winston.error('6th Level');

    var mongoURL = 'mongodb://localhost/test';
    mongoose.connect(mongoURL);
    var db = mongoose.connection;
    db.on('error', function (error) {
        winston.error(error.message);
    });
    db.once('open', function () {
        winston.info('Connected with mongodb on ', mongoURL);
    });
    // Define Schema for Collection.
    var User = mongoose.model('User', {fname: String, lname: String});

    app.use(function (req, res, next) {
        winston.silly("Request: ", req.url);
        next();
    });
    app.get('/', function (req, res) {
        // Create User Object
        var user = new User({fname: 'Amit', lname: 'Thakkar', age: 27});
        // And call save on it.
        user.save(function (error, user) {
            if (error) {
                winston.error(error);
            } else {
                res.status(200).send("User saved:" + user);
            }
        });
    });
    var server = app.listen(3000, function () {
        winston.info('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);