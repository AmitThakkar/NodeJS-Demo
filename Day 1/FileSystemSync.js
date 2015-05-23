/**
 * Created by Amit Thakkar on 16/05/15.
 */
(function (require) {
    var fs = require('fs');

    fs.unlinkSync('test2');
    console.log('successfully deleted test2');
})(require);