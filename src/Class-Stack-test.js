'use strict';

const Stack = require('./moduls/Class-Stack.js');
const Chai = require('chai');
const { assert } = require('chai');

const stack = new Stack();

describe('Class Stack implements the basic methods of the data structure stack', function () {
  it('Class method (push) must add one element on th top of stack', function () {
    const element = 1;
    stack.push(element);
    assert.equal(stack.pop(), element);
  });
  it('Class method (pop) must delete top element in stack and return it', function () {
    const element = 2;
    stack.push(element);
    assert.equal(stack.pop(), element);
  });
  it('Class method (pop) must throw an exception, if stack is empty', function () {
    assert.throw(() => stack.pop(), 'Stack is empty');
  });
  it('Class method (peek) must return top element of stack', function () {
    const element = 3;
    stack.push(element);
    assert.equal(stack.peek(), element);
    stack.pop();
  });
  it('Class method (peek) must throw an exception, if stack is empty', function () {
    assert.throw(() => stack.peek(), 'Stack is empty');
  });
  it('Class method (count) must return amount of elements', function () {
    const element = 1;
    stack.push(element);
    assert.equal(stack.count(), 1);
  });
});
