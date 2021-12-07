'use strict';

const object = {
  name: 'Швейцария',
  languages: ['немецкий', 'французский', 'итальянский'],
  capital: {
    name: 'Берн',
    population: 126598,
  },
  cities: [
    { name: 'Цюрих', population: 378884 },
    { name: 'Женева', population: 188634 },
    { name: 'Базель', population: 164937 },
  ],
  pikiTochenie: null,
  huiDrojenie: undefined,
};

function getObjectDeepClone(sourceObject, copy) {
  for (const key in sourceObject) {
    if (Array.isArray(sourceObject[key])) {
      copy[key] = [];
      getObjectDeepClone(sourceObject[key], copy[key]);
    } else if (typeof sourceObject[key] === 'object') {
      sourceObject[key] === null
        ? (copy[key] = sourceObject[key])
        : (copy[key] = {});

      getObjectDeepClone(sourceObject[key], copy[key]);
    } else {
      Array.isArray(copy[key])
        ? copy[key].push(sourceObject[key])
        : (copy[key] = sourceObject[key]);
    }
  }
  return copy;
}
const instance = {};
const array = [];
console.log(getObjectDeepClone(object, instance));
