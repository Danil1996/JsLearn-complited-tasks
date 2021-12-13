'use strict';

const Stack = require('./moduls/Class-Stack.js');
const Chai = require('chai');
const { assert } = require('chai');

const stack = new Stack();

describe('Class Stack implements the basic methods of the data structure stack', function () {
  describe('Method check (push)', function () {
    it('Class method (push) must add one element on th top of stack', function () {
      const element = 1;
      stack.push(element);
      assert.equal(stack.peek(), element);
    });
  });

  describe('Method check (pop)', function () {
    it('Class method (pop) must delete top element in stack and return it', function () {
      const element = 2;
      stack.push(element);
      assert.equal(stack.pop(), element);
      it('Checking if the element has really been removed from the stack', function () {
        assert.notEqual(stack.peek(), element);
      });
      stack.pop();
    });
    it('Class method (pop) must throw an exception, if stack is empty', function () {
      assert.throw(() => stack.pop(), 'Stack is empty');
    });
  });
  describe('Method check (peek)', function () {
    it('Class method (peek) must return top element of stack', function () {
      const element = 3;
      stack.push(element);
      const stackLength = stack.count();
      assert.equal(stack.peek(), element);
      it('checking if the item is still in place', function () {
        assert.equal(stack.count(), stackLength);
      });
      stack.pop();
    });
    it('Class method (peek) must throw an exception, if stack is empty', function () {
      assert.throw(() => stack.peek(), 'Stack is empty');
    });
  });
  describe('Method check (count)', function () {
    it('Class method (count) must return amount of elements', function () {
      const element = 1;
      stack.push(element);
      assert.equal(stack.count(), 1);
    });
  });
});
