'use strict';

module.exports = class Deque {
  #deque = [];
  constructor() {}

  enqueueFirst(element) {
    this.#deque.unshift(element);
  }

  enqueueLast(element) {
    this.#deque.push(element);
  }

  dequeueFirst() {
    if (this.#deque.length === 0) {
      throw new Error('Deque is empty');
    }
    return this.#deque.shift();
  }

  dequeueLast() {
    if (this.#deque.length === 0) {
      throw new Error('Deque is empty');
    }
    return this.#deque.pop();
  }

  peekFirst() {
    if (this.#deque.length === 0) {
      throw new Error('Deque is empty');
    }
    return this.#deque[0];
  }

  peekLast() {
    if (this.#deque.length === 0) {
      throw new Error('Deque is empty');
    }
    return this.#deque[this.#deque.length - 1];
  }

  count() {
    return this.#deque.length;
  }
};


