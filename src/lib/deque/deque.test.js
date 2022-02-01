'use strict';

const Deque = require('./deque.js');
const { assert } = require('chai');

const deque = new Deque();

describe('Class Deque implements the basic methods of the data structure double-sided queue(deque)', () => {
  describe('Method check (enqueueFirst)', () => {
    it('Class method (enqueueFirst) must add one element on the beginning of the deque', () => {
      const element = 1;
      deque.enqueueFirst(element);
      assert.equal(deque.peekFirst(), element);
      deque.dequeueFirst();
    });
  });

  describe('Method check (enqueueLast)', () => {
    it('Class method (enqueueLast) must add one element at the end of the deque', () => {
      const element = 2;
      deque.enqueueLast(element);
      assert.equal(deque.peekLast(), element);
      deque.dequeueLast();
    });
  });

  describe('Method check (dequeueFirst)', () => {
    const firstElement = 1;
    const secondElement = 2;
    it('Class method (dequeueFirst) must delete the first element of the deque and return it', () => {
      deque.enqueueFirst(firstElement);
      deque.enqueueFirst(secondElement);
      assert.equal(deque.dequeueFirst(), secondElement);
    });
    it('Checking if the element has really been removed from the deque', () => {
      assert.notEqual(deque.dequeueFirst(), secondElement);
    });
    it('Class method (dequeueFisrt) must throw an exception, if deque is empty', () => {
      assert.equal(deque.count(), 0);
      assert.throw(() => deque.dequeueFirst(), 'Deque is empty');
    });
  });

  describe('Method check (dequeueLast)', () => {
    const firstElement = 1;
    const secondElement = 2;
    it('Class method (dequeueLast) must delete the last element of the deque and return it', () => {
      deque.enqueueLast(firstElement);
      deque.enqueueLast(secondElement);
      assert.equal(deque.dequeueLast(), secondElement);
    });
    it('Checking if the element has really been removed from the deque', () => {
      assert.notEqual(deque.dequeueLast(), secondElement);
    });
    it('Class method (dequeueLast) must throw an exception, if deque is empty', () => {
      assert.equal(deque.count(), 0);
      assert.throw(() => deque.dequeueLast(), 'Deque is empty');
    });
  });

  describe('Method check (peekFirst)', () => {
    const element = 2;
    const secondElement = 3;
    it('Class method (peekFirst) must return first element of the deque', () => {
      deque.enqueueFirst(element);
      deque.enqueueFirst(secondElement);
      assert.equal(deque.peekFirst(), secondElement);
    });
    it('checking if the item is still in place', () => {
      assert.equal(deque.dequeueFirst(), secondElement);
    });
    it('Class method (peekFirst) must throw an exception, if deque is empty', () => {
      deque.dequeueFirst();
      assert.equal(deque.count(), 0);
      assert.throw(() => deque.peekFirst(), 'Deque is empty');
    });
  });

  describe('Method check (peekLast)', () => {
    const element = 2;
    const second_element = 3;
    it('Class method (peekLast) must return last element of the deque', () => {
      deque.enqueueLast(element);
      deque.enqueueLast(second_element);
      assert.equal(deque.peekLast(), second_element);
    });
    it('checking if the item is still in place', () => {
      assert.equal(deque.dequeueLast(), second_element);
    });
    it('Class method (peekFirst) must throw an exception, if deque is empty', () => {
      deque.dequeueLast();
      assert.equal(deque.count(), 0);
      assert.throw(() => deque.peekLast(), 'Deque is empty');
    });
  });

  describe('Method check (count)', () => {
    it('Class method (count) must return amount of elements, in this test we add one item and expect the number of items = 1 ', () => {
      const element = 1;
      deque.enqueueFirst(element);
      assert.equal(deque.count(), 1);
    });
    it('Class method (count) must return amount of elements, in this test we delete one item and expect the number of items = 0', () => {
      deque.dequeueFirst();
      assert.equal(deque.count(), 0);
    });
  });
});
