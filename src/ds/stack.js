const Stack = class {
    constructor() {
        this.data = {};
        this.count = 0;
    }
};

Stack.prototype.push = function (val) {
    this.data[this.count] = val;
    this.count++;
};

Stack.prototype.pop = function () {
    const res = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;
    return res;
};

Stack.prototype.peek = function () {
    return this.data[this.count - 1];
};

Stack.prototype.size = function () {
    return this.count;
};

Stack.prototype.print = function () {
    return this.data;
};

export default Stack;
