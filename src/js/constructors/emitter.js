var Emitter = function() {
    this.events = {};

    this.on = function(...args) {
        var [message, fn] = args;
        if(message in this.events) this.events[message].push(fn);
        else this.events[message] = [fn];
    }

    this.emit = function(...args) {
        var message = args.shift();
        this.events[message].forEach(fn => fn(...args));
    }

    this.remove = function(...args) {
        var [message, callback] = args;
        this.events[message] = this.events[message].filter(event => {
            return event !== callback;
        });
    }
}

var em = new Emitter();

em.on('message', function() { console.log(1) });
em.on('message', function(d) { console.log(d) });
em.on('message', function(d) { console.log(d*d) });
var cb = function(d) { console.log(d*2) }
em.on('message', cb);
em.emit('message', 5);
console.log('====')
em.remove('message', cb);
em.emit('message', 5);