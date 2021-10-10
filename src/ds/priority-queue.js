const Queue = class {
    constructor() {
        this.data = [];
    }
};

Queue.prototype.enqueue = function ([val, priority]) {
    if (this.data.length === 0) {
        this.data.push([val, priority]);
        return;
    }
    let i = 0;
    while (this.data[i] && this.data[i][1] > priority) i++;
    this.data.splice(i, 0, [val, priority]);
    return;
};

Queue.prototype.dequeue = function () {
    return this.data.shift();
};

Queue.prototype.print = function () {
    return this.data.map(([val, priority]) => val);
};