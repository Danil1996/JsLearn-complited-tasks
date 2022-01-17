'use strict';

const Queue = require('./queue.js');
const Chai = require('chai');
const { assert } = require('chai');

const queue = new Queue();

describe('Class Queue implements the basic methods of the data structure queue', () => {
  describe('Method check (enqueue)', () => {
    it('Class method (enqueue) must add one element on top of the list', () => {
      const element = 1;
      queue.enqueue(element);
      assert.equal(queue.peek(), element);
      queue.dequeue();
    });
  });

  describe('Method check (dequeue)', () => {
    const firstElement = 1;
    const secondElement = 2;
    it('Class method (dequeue) must delete the first element of the list and return it', () => {
      queue.enqueue(firstElement);
      queue.enqueue(secondElement);
      assert.equal(queue.dequeue(), firstElement);
    });
    it('Checking if the element has really been removed from the queue', () => {
      assert.notEqual(queue.peek(), firstElement);
      queue.dequeue();
    });
    it('Class method (dequeue) must throw an exception, if queue is empty', () => {
      assert.equal(queue.count(), 0);
      assert.throw(() => queue.dequeue(), 'Queue is empty');
    });
  });

  describe('Method check (peek)', () => {
    const element = 2;
    const second_element = 3;
    it('Class method (peek) must return first element of the list', () => {
      queue.enqueue(element);
      queue.enqueue(second_element);
      assert.equal(queue.peek(), element);
    });
    it('checking if the item is still in place', () => {
      assert.equal(queue.dequeue(), element);
    });
    it('Class method (peek) must throw an exception, if queue is empty', () => {
      queue.dequeue();
      assert.equal(queue.count(), 0);
      assert.throw(() => queue.peek(), 'Queue is empty');
    });
  });

  describe('Method check (count)', () => {
    it('Class method (count) must return amount of elements, in this test we add one item and expect the number of items = 1 ', () => {
      const element = 1;
      queue.enqueue(element);
      assert.equal(queue.count(), 1);
    });
    it('Class method (count) must return amount of elements, in this test we delete one item and expect the number of items = 0', () => {
      queue.dequeue();
      assert.equal(queue.count(), 0);
    });
  });
});
