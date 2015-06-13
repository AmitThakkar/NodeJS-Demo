/**
 * Created by AMit Thakkar on 13/06/15.
 */
(function (require, module) {
    var mongoose = require('mongoose');
    var ObjectId = mongoose.Schema.Types.ObjectId;
    var employeeSchema = mongoose.Schema({
        fname: String,
        lname: String,
        age: Number
    });
    employeeSchema.findOneById = function (id, callback) {
        this.findOne({_id: ObjectId(id)}, callback);
    };
    module.exports = mongoose.model('Employee', employeeSchema);
})(require, module);