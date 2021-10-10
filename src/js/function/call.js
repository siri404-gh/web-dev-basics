Function.prototype.myCall = function(...args) {
    var obj = args.shift();
    var key = Math.random();
    obj[key] = this;
    var result = obj[key](...args);
    delete obj[key];
    return result;
};

var name = 'global';

var obj = {
    name: 'sreeram',
};

var greet = function(a, b) {
    console.log(`${a} ${this.name} ${b}`);
};

greet(1, 2);
greet.call(obj, 1, 2);
greet.myCall(obj, 1, 2);