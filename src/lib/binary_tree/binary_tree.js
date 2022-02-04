'use strict';

module.exports = class BinarySearchTree {
  #binaryTree = {};
  #counter = 0;

  constructor() {}

  add(element) {
    let temporaryLink = this.#binaryTree;
    while ('value' in temporaryLink) {
      temporaryLink =
        temporaryLink.value > element
          ? temporaryLink.leftChild
          : temporaryLink.rightChild;
    }
    this.setElement(temporaryLink, element);
  }

  setElement(temporaryLink, element) {
    temporaryLink.value = element;
    temporaryLink.leftChild = {};
    temporaryLink.rightChild = {};
    ++this.#counter;
  }

  contains(element) {
    let temporaryLink = this.#binaryTree;
    let whichChild;
    while ('value' in temporaryLink) {
      if (temporaryLink.value === element) {
        return [true, whichChild];
      }
      temporaryLink =
        temporaryLink.value > element
          ? ((whichChild = 'leftChild'), temporaryLink.leftChild)
          : ((whichChild = 'rightChild'), temporaryLink.rightChild);
    }
    return false;
  }

  count() {
    return this.#counter;
  }

  clear() {
    this.#binaryTree = {};
    this.#counter = 0;
  }
};
