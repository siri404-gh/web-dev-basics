class Redux {
    constructor(reducer) {
        this.state = null;
        this.views = [];
        this.reducer = reducer;
    }

    subscribe(...args) {
        this.views.push(...args);
    }

    dispatch(...args) {
        var [action] = args;
        this.state = this.reducer(this.state, action);
        this.views.forEach(view => view());
    }

    getState() {
        return this.state;
    }
}

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