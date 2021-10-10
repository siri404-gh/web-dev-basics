Function.prototype.myApply = function(...args) {
    var obj = args.shift();
    var key = Math.random();
    obj[key] = this;
    var result = obj[key](...args[0]);
    delete obj[key];
    return result;
};

var name = 'sreeram';

var obj = {
    name: 'sreeram'
};

var greet = function(a, b) {
    console.log(`${a} ${this.name} ${b}`);
};

greet(1, 2);
greet.apply(obj, [1, 2]);
greet.myApply(obj, [1, 2]);