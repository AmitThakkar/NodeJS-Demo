/**
 * Created by Amit Thakkar on 25/05/15.
 */
(function (module) {
    module.exports = function (app) {
        app.get('/hello', function (req, res) {
            res.status(200).send("Hello World");
        });
        app.get('/me', function (req, res) {
            res.status(200).send("This is me");
        });
    };
})(module);