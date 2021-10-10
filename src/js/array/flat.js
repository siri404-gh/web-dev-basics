Array.prototype.myFlat = function() {
    let result = [];

    (function() {
        this.forEach(item => {
            if (item.length) arguments.callee.call(item)
            else result.push(item);
        });
    }).call(this);

    return result;
}

const arr = [1, 2, [3, 4, 5, [6, 7], 8, 9, [10]]];

console.log(arr.myFlat());