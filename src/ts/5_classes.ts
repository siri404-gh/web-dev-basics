class Animal {
    protected name: string

    protected constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Hi, " + this.name
    }
};

const Lion = class extends Animal {
    constructor(name: string) {
        super(name)
    }

    greet() {
        return this.name;
    }
}

const lion = new Lion('Simba');

// console.log(lion.greet());