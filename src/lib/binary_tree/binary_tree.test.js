'use strict';

const BinarySearchTree = require('./binary_tree.js');
const { assert } = require('chai');

const bin = new BinarySearchTree();

describe('Class Binary Search Tree implements the basic methods of abstract data type, the who has the same name', () => {
  const firstElement = 10;
  const secondElement = 7;
  const thirdElement = 15;
  const fourthElement = 4;
  describe('Method (add), must add the element to tree and increment counter ', () => {
    it('Cheking if the tree is empty', () => {
      assert.equal(bin.count(), 0);
    });
    it('Checking an element is added to the tree', () => {
      bin.add(firstElement);
      assert.equal(bin.contains(firstElement), true);
    });
    it('Cheking if the counter has increment', () => {
      assert.equal(bin.count(), 1);
    });
  });

  describe('Method (contains), should return a boolean value depending on whether the value is in the tree or not', () => {
    it('If value is in the tree', () => {
      assert.isTrue(bin.contains(firstElement));
    });
    it('If value isnt in the tree', () => {
      assert.isFalse(bin.contains(fourthElement));
    });
  });

  describe('Method (count), must return amount of elements in the tree', () => {
    it('If there are any elements in the tree. Now there are 1 elements in the tree', () => {
      assert.equal(bin.count(), 1);
    });
    it('If the tree is empty', () => {
      bin.clear();
      assert.equal(bin.count(), 0);
    });
  });

  describe('Method (clear)', () => {
    it('Must clear the tree of all elements', () => {
      bin.add(firstElement);
      bin.add(secondElement);
      bin.add(thirdElement);
      assert.equal(bin.count(), 3);
      bin.clear();
      assert.equal(bin.count(), 0);
    });
  });
});
