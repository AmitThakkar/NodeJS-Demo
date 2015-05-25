/**
 * Created by Amit Thakkar on 25/05/15.
 */
(function () {
    module.exports = function (app) {
        app.get('/', function (req, res) {
            res.send("Hello World");
        });
        app.get('/me', function (req, res) {
            res.send("This is me");
        });
    };
})();