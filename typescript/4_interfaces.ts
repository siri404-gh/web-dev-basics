interface Person {
    name: string;
    age: number;
}

const greet = (person: Person): string => {
    return 'Hello ' + person.name;
}

const person: Person = {
    name: 'Sreeram',
    age: 32,
}

console.log(greet(person));