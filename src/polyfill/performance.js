
var performance = global.performance;
// performance.now
if (!(performance && performance.now)) {
	performance = {};
    performance.__startTime = Date.now();
    performance.now = function () {
        return Date.now() - performance.__startTime;
    };
}

module.exports = performance;
