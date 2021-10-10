Array.prototype.myReduce = function(...args) {
    var [reducer, initialVal] = args;
    let result = initialVal;

    this.forEach(item => {
        result = reducer(result, item);
    });

    return result;
};

console.log([1, 2, 3, 4, 5].myReduce((acc, item) => acc + item, 0))