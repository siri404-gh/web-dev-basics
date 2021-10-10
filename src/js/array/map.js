Array.prototype.myMap = function(...args) {
    let result = [];
    var mapper = args[0];
    this.forEach(item => {
        result.push(mapper(item));
    });

    return result;
};

console.log([1, 2, 3].myMap(item => item * 2));