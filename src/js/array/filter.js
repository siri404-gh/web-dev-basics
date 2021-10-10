Array.prototype.myFilter = function(...args) {
    let result = [];
    var fn = args[0];

    this.forEach(item => {
        if(fn(item)) result.push(item);
    });

    return result;
};

var arr = [1, 2, 3, 4, 5];

console.log(arr.myFilter((item) => item % 2 !== 0));