Function.prototype.debounce = function(...args) {
    var fn = this;
    var [duration] = args;
    let timer;

    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(fn.bind(null, ...args), duration);
    }
}

const sleep = time => new Promise((resolve, reject) => setTimeout(resolve, time));

const debouncedLog = console.log.debounce(1000);

(async () => {
	debouncedLog(1);
	debouncedLog(2);
	debouncedLog(3);
	debouncedLog(4);    // 4
	await sleep(1000);
	debouncedLog(5);
	debouncedLog(6);
	debouncedLog(7);
	debouncedLog(8);    // 8
	await sleep(1000);
	debouncedLog(9);
	debouncedLog(10);
	debouncedLog(11);
	debouncedLog(12);   // 12
})();
