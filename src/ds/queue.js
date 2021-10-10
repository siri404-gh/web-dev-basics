const Queue = class {
    constructor() {
      this.data = [];
    }
  };
  
  Queue.prototype.enqueue = function(val) {
    this.data.push(val);
  };
  
  Queue.prototype.dequeue = function(val) {
    this.data.shift();
  };
  
  Queue.prototype.isEmpty = function(val) {
    return this.data.length === 0;
  };
  
  Queue.prototype.front = function(val) {
    return this.data[0];
  };
  
  Queue.prototype.last = function(val) {
    if (this.data.length === 0) return null;
    return this.data[this.data.length - 1];
  };

  Queue.prototype.size = function(val) {
    return this.data.length;
  };
  
  Queue.prototype.print = function(val) {
    return this.data;
  };