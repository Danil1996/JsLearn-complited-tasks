'use strict';

const Stack = require('./moduls/Class-Stack.js');
const Chai = require('chai');
const { assert } = require('chai');

const stack = new Stack();

describe('Class Stack implements the basic methods of the data structure stack', function () {
  it('this function must add one element^on th top of stack', function () {
    assert.equal(stack.push(1), 'Element add on the top of stack');
  });
  it('this function must delete top element in stack and return it', function () {
    stack.push(1);
    assert.equal(stack.pop(), 1);
  });
  it('this function must return top element of stack', function () {
    stack.push(1);
    assert.equal(stack.peek(), 1);
  });
  it('this function must return amount of elements', function () {
    console.log(assert.equal(stack.count(), 2));
  });
});
