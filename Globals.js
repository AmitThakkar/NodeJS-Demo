/**
 * Created by Amit Thakkar on 16/05/15.
 */
(function () {
    console.log("Console is global object.");
    setTimeout(function () {
        console.log("Set Timeout is global function");
    }, 1000);
    var intervalId = setInterval(function () {
        console.log("Set Interval is global function");
    }, 1000);
    setTimeout(function () {
        console.log("Clearing Interval");
        clearInterval(intervalId);
    }, 10000);
})();