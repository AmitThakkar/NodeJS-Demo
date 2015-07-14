/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var _ = require("lodash");

    console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
    console.log(_.chunk(['a', 'b', 'c', 'd'], 3)); // [ [ 'a', 'b', 'c' ], [ 'd' ] ]
    console.log(_.filter([4, 5, 6], function (n) {
        return n % 2 == 0;
    })); // [ 4, 6 ]
})(require);