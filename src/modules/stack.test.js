'use strict';

const Stack = require('./stack.js');
const Chai = require('chai');
const { assert } = require('chai');

const stack = new Stack();

describe('Class Stack implements the basic methods of the data structure stack', () => {
  describe('Method check (push)', () => {
    it('Class method (push) must add one element on th top of stack', () => {
      const element = 1;
      stack.push(element);
      assert.equal(stack.peek(), element);
    });
  });

  describe('Method check (pop)', () => {
    const element = 2;

    it('Class method (pop) must delete top element in stack and return it', () => {
      stack.push(element);
      assert.equal(stack.pop(), element);
    });
    it('Checking if the element has really been removed from the stack', () => {
      assert.notEqual(stack.peek(), element);
      stack.pop();
    });
    it('Class method (pop) must throw an exception, if stack is empty', () => {
      assert.throw(() => stack.pop(), 'Stack is empty');
    });
  });
  describe('Method check (peek)', () => {
    const element = 2;
    it('Class method (peek) must return top element of stack', () => {
      stack.push(element);
      assert.equal(stack.peek(), element);
    });
    it('checking if the item is still in place', () => {
      assert.equal(stack.pop(), element);
    });
    it('Class method (peek) must throw an exception, if stack is empty', () => {
      assert.throw(() => stack.peek(), 'Stack is empty');
    });
  });
  describe('Method check (count)', () => {
    it('Class method (count) must return amount of elements', () => {
      const element = 1;
      stack.push(element);
      assert.equal(stack.count(), 1);
    });
  });
});
