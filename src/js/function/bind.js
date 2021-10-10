Function.prototype.myBind = function(...args) {
    var obj = args.shift();
    var key = Math.random();
    obj[key] = this;

    return function(...args2) {
        return obj[key](...[...args, ...args2]);
    }
};

var name = 'global';

var obj = {
    name: 'sreeram',
};

var greet = function(a, b) {
    console.log(`${a} ${this.name} ${b}`);
};

greet(1, 2);
greet.bind(obj)(1, 2);
greet.myBind(obj)(1, 2);
greet.myBind(obj, 1, 2)();
greet.myBind(obj, 1)(2);