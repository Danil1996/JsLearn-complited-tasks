'use strict';

let person = {
  name: 'Sanya',
  surname: 'Suvorov',
  age: 34,
  sayHello() {
    console.log(this);
    const internalSayHello = () => console.log(this);

    internalSayHello();
  },
};
const secondPerson = person;

secondPerson.sayHello();
