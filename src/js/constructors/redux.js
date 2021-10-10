var Redux = function (reducer) {
    this.state = null;
    this.views = [];

    this.subscribe = function (...args) {
        this.views.push(...args);
    }

    this.dispatch = function (...args) {
        var [action] = args;
        this.state = reducer(this.state, action);

        this.views.forEach(view => view());
    }

    this.getState = function () {
        return this.state;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case '+':
            return ++state;
        case '-':
            return --state;
        default:
            return state;
    }
};

var r = new Redux(reducer);
r.dispatch({ type: '+'});
r.dispatch({ type: '+'});
r.dispatch({ type: '+'});
r.dispatch({ type: '+'});
r.dispatch({ type: '-'});
console.log(r.getState() === 3);