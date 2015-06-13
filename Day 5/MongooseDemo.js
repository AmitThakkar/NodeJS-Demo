/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    var mongoose = require('mongoose');

    // Connect with MongoDB server
    var mongoURL = 'mongodb://localhost/test';
    mongoose.connect(mongoURL);
    var db = mongoose.connection;
    db.on('error', function (error) {
        console.log('Error: ', error.message);
    });
    db.once('open', function () {
        console.log('Connected with mongodb on ', mongoURL);
    });

    // Define Schema for Collection.
    var User = mongoose.model('User', {fname: String, lname: String});

    app.use(function (req, res, next) {
        console.log("Request: ", req.url);
        next();
    });
    app.get('/', function (req, res) {
        // Create User Object
        var user = new User({fname: 'Amit', lname: 'Thakkar', age: 27});
        // And call save on it.
        user.save(function (error, user) {
            if (error) {
                console.log('Error:', error);
            } else {
                res.status(200).send("User saved:" + user);
            }
        });
    });
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);