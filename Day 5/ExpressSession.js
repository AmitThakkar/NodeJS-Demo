/**
 * Created by Amit Thakkar on 20/06/15.
 */
(function(require) {
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressSession = require('express-session');
    var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it

    var app = express();
    // must use cookieParser before expressSession
    app.use(cookieParser());
    app.use(expressSession({secret:'AmitThakkarJSNinja'}));
    app.use(bodyParser());

    app .get('/', function(req, res){
        var html = '<form action="/" method="post">' +
            'Your name: <input type="text" name="userName"><br>' +
            '<button type="submit">Submit</button>' +
            '</form>';
        if (req.session.userName) {
            html += '<br>Your username from your session is: ' + req.session.userName;
        }
        res.send(html);
    });

    app.post('/', function(req, res){
        req.session.userName = req.body.userName;
        res.redirect('/');
    });

    var server = app.listen(8080, function() {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);