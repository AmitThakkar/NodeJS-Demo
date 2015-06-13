/**
 * Created by Amit Thakkar on 25/05/15.
 */
(function (module, require) {
    module.exports = function (app) {
        require('./employee/employee.main')(app);
    };
})(module, require);