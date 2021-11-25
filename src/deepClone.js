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
};

function getObjectDeepClone(copy, sourceObject) {
  for (const key in sourceObject) {
  }
  return copy;
}
