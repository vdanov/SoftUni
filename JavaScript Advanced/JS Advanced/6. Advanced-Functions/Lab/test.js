// call example

/*let vlado = {
    name: 'Vlado',
    age: 31,
    profession: 'back-end developer',
    greeting() {
        console.log(`Hello my name is ${this.name}, I'm ${this.age} and I work as a: ${this.profession}`);
    }
};

let mimi = {
    name: 'Mimi',
    age: 40,
    profession: 'front-end developer',
    greeting() {
        console.log(`Az se kazvam ${this.name}, az sum na ${this.age} i rabotq: ${this.profession}`);
    }
};

mimi.greeting.call(vlado); */

//bind example

let vlado = {
    name: 'Vlado',
    age: 31,
    profession: 'back-end developer',
};

let mimi = {
    name: 'Mimi',
    age: 40,
    profession: 'front-end developer',
};

let greeter = function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I work as a ${this.profession}.`)
};

let greetMimi = greeter.bind(vlado);

greetMimi();