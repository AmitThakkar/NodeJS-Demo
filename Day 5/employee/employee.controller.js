/**
 * Created by Amit Thakkar on 13/06/15.
 */

(function (require, module) {
    var Employee = require('./employee.domain');
    module.exports.get = function(id) {
        Employee.findOneById(id, function(error, user) {
            if(error) {

            }
        });
    };
})(require, module);