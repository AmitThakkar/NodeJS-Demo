/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function () {
    var _ = require("lodash");

    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
    console.log(_.filter([4, 5, 6], function (n) {
        return n % 2 == 0;
    }));
})();