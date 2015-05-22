/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express'),
        bodyParser = require('body-parser');
    var app = express();
    app.use(express.static('Part-3'));
    app.use(bodyParser.json());
    app.get('/todo', function (req, res) {
        res.json(todoTasks);
    });
    app.post('/todo', function (req, res) {
        todoTasks.push(req.body.task);
        res.send({status: 200});
    });
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);