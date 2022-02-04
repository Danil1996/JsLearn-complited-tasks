'use strict';

const BinarySearchTree = require('./binary_tree.js');
const { assert } = require('chai');

const bin = new BinarySearchTree();

describe('Class Binary Search Tree implements the basic methods of abstract data type, the who has the same name', () => {
  const firstElement = 10;
  const secondElement = 7;
  const thirdElement = 15;
  const fourthElement = 4;
  describe('Method (add), must add the element to tree according to the rule: ', () => {
    it('1. If the tree is empty, the added element becomes the root node', () => {
      bin.add(firstElement);
      assert.equal(bin.count(), 1);
    });
    it('2. If the element being added is less than the root node, then it must become its left child', () => {
      bin.add(secondElement);
      assert.equal(bin.contains(secondElement)[1], 'leftChild');
    });
    it('3. If the element being added is greater than or equal to the root node, then it must become its right child', () => {
      bin.add(thirdElement);
      assert.equal(bin.contains(thirdElement)[1], 'rightChild');
    });
  });

  describe('Method (contains), should return a boolean value depending on whether the value is in the tree or not', () => {
    it('If value is in the tree', () => {
      assert.isTrue(bin.contains(secondElement)[0]);
    });
    it('If value isnt in the tree', () => {
      assert.isFalse(bin.contains(fourthElement));
    });
  });

  describe('Method (count), must return amount of elements in the tree', () => {
    it('If there are any elements in the tree. Now there are 3 elements in the tree', () => {
      assert.equal(bin.count(), 3);
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
