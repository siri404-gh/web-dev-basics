class Emitter {
    constructor() {
        this.events = {};
    }

    on(...args) {
        var message = args.shift();
        if(message in this.events) this.events[message].push(...args);
        else this.events[message] = args;
    }

    emit(...args) {
        var message = args.shift();
        if (message in this.events) {
            this.events[message].forEach(event => {
                event(...args);
            });
        }
    }

    remove(...args) {
        var message = args.shift();
        if (message in this.events) {
            this.events[message] = this.events[message].filter(event => {
                return !args.includes(event);
            });
        }
    }
}


var em = new Emitter();

var cb1 = function(d) { console.log(d) };
var cb2 = function(d) { console.log(d*d) };
var cb3 = function(d) { console.log(d*d*d) };

em.on('message', cb1);
em.on('message', cb2);
em.on('message', cb3);
em.emit('message', 5);
console.log('====')
em.remove('message', cb1, cb2);
em.emit('message', 5);