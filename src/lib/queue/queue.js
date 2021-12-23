'use strict';

module.exports = class Queue {
  #queue = [];
  constructor() {}

  enqueue(element) {
    this.#queue.push(element);
  }
  dequeue() {
    if (this.#queue.length === 0) {
      throw new Error('Queue is empty');
    }
    return this.#queue.shift();
  }
  peek() {
    if (this.#queue.length === 0) {
      throw new Error('Queue is empty');
    }
    return this.#queue[0];
  }
  count() {
    return this.#queue.length;
  }
};
