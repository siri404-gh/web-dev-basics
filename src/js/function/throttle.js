Function.prototype.myThrottle = function(...args) {
    let time = 0;
    let [duration] = args;
    return (function(...args) {
      const currentTime = new Date().getTime();
      if (currentTime - time < duration) return;
      time = currentTime;
      this(...args);
    }).bind(this);
};

const sleep = time => new Promise((resolve, reject) => setTimeout(resolve, time));

const throttledLog = console.log.myThrottle(1000);

(async () => {
	throttledLog(1);    // 1
	throttledLog(2);
	throttledLog(3);
	throttledLog(4); 
	await sleep(1000);
	throttledLog(5);    // 5
	throttledLog(6);
	throttledLog(7);
	throttledLog(8);
	await sleep(1000);
	throttledLog(9);    // 9
	throttledLog(10);
	throttledLog(11);
	throttledLog(12);
})();
