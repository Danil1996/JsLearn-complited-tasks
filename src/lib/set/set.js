'use strict';

class MySet {
  set = [];

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.current === undefined) {
      this.current = this.set[0];
      this.last = this.set[this.set.length - 1];
    }

    if (this.current <= this.last) {
      return {
        done: false,
        value: this.current++,
      };
    } else {
      delete this.current;
      return {
        done: true,
      };
    }
  }

  constructor(...initialValuesInArray) {
    this.set = initialValuesInArray.flat();
    this.set = this.sortSet(this.removeDuplicates(this.set));
  }

  // This is basic methods of the class Set
  removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }

  getDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) !== index);
  }

  sortSet(set) {
    return set.sort((a, b) => a - b);
  }
  add(element) {
    if (this.set.includes(element)) {
      throw new Error('This set already has this element');
    }
    this.set.push(element);
    this.sortSet(this.set);
  }

  addRange(...array) {
    array.forEach((item) => {
      this.add(item);
    });
  }

  remove(element) {
    const indexOfSearchingElement = this.set.indexOf(element);
    if (indexOfSearchingElement === -1) {
      return false;
    } else {
      this.set.splice(indexOfSearchingElement, 1);
      return true;
    }
  }

  contains(element) {
    const searchingElement = this.set.indexOf(element);
    if (searchingElement === -1) {
      return false;
    } else {
      return true;
    }
  }

  count() {
    return this.set.length;
  }

  clear() {
    this.set = [];
  }

  // This is basic algorithms
  union(otherSet) {
    let concatArray = [];
    const result = concatArray.concat(...otherSet, this.set);
    return new MySet(result);
  }

  intersection(otherSet) {
    let concatArray = [];
    const result = concatArray.concat(...otherSet, this.set);
    return new MySet(this.getDuplicates(result));
  }

  difference(otherSet) {
    const newSet = new MySet(this.set);
    const intersectionResult = this.intersection(otherSet);
    for (const value of intersectionResult) {
      newSet.remove(value);
    }
    return newSet;
  }

  symmetricDifference(otherSet) {
    let concatArray = [];
    const newSet = new MySet(concatArray.concat(...otherSet, this.set));
    const intersectionResult = this.intersection(otherSet);
    for (const value of intersectionResult) {
      newSet.remove(value);
    }
    return newSet;
  }

  isSubSet(otherSet) {
    for (const value of otherSet) {
      if (!this.contains(value)) {
        return false;
      }
    }
    return true;
  }
}
