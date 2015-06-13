/**
 * Created by AMit Thakkar on 13/06/15.
 */
(function (require, module) {
    var mongoose = require('mongoose');
    var employeeSchema = mongoose.Schema({
        fname: String,
        lname: String,
        age: Number
    });
    employeeSchema.static('findOneById', function (id, callback) {
        this.findOne({_id: id}, callback);
    });
    module.exports = mongoose.model('Employee', employeeSchema);
})(require, module);