'use strict';

class MySet {
  set = [];

  constructor(...initialValuesInArray) {
    this.set = initialValuesInArray.flat();
    this.set = this.setSorting(this.duplicateCleaning(this.set));
  }

  // This is basic methods of the class Set

  duplicateCleaning(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }

  setSorting(set) {
    return set.sort((a, b) => a - b);
  }
  add(element) {
    if (this.set.includes(element)) {
      throw new Error('This set already has this element');
    }
    this.set.push(element);
    setSorting(this.set);
  }

  addRange(...array) {
    array.forEach((item) => {
      this.add(item);
    });
  }

  remov(element, set = this.set) {
    const indexOfSearchingElement = set.indexOf(element);
    if (indexOfSearchingElement === -1) {
      return false;
    } else {
      set.splice(indexOfSearchingElement, 1);
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

  // This methods for iteration

  [Symbol.iterator]() {
    return new Iterator(this);
  }
  getElement(index) {
    return this.set[index];
  }

  // This is basic algorithms

  union(otherSet, currentSet = this.set) {
    let concatArray = [];
    const result = concatArray.concat(...otherSet, ...currentSet);

    return new MySet(result);
  }

  intersection(otherSet, currentSet = this.set) {
    let concatArray = [];
    const result = concatArray.concat(...otherSet, ...currentSet);
    return new MySet(
      result.filter((item, index) => result.indexOf(item) !== index)
    );
  }

  difference(otherSet, currentSet = this.set) {
    const differenceResult = this.setCopy(currentSet);
    const intersectionResult = this.intersection(otherSet);
    for (const value of intersectionResult) {
      this.remov(value, differenceResult);
    }
    return new MySet(differenceResult);
  }

  symmetricDifference(otherSet, currentSet = this.set) {
    const unionResult = this.union(otherSet, currentSet);
    const intersectionResult = this.intersection(otherSet, currentSet);

    return this.difference(intersectionResult, unionResult);
  }
  isSubSet(otherSet, currentSet = this.set) {
    const copyResult = this.setCopy(otherSet);
    const intersectionResult = this.setCopy(
      this.intersection(currentSet, copyResult)
    );
    if (intersectionResult.length) {
      for (const value of copyResult) {
        this.remov(value, intersectionResult);
      }
      return true;
    } else {
      return false;
    }
  }

  setCopy(set) {
    const resultOfCopy = [];
    for (const value of set) {
      resultOfCopy.push(value);
    }
    return resultOfCopy;
  }
}

class Iterator {
  object;
  nextIndex;

  constructor(object) {
    this.object = object;
    this.nextIndex = 0;
  }

  next() {
    if (this.nextIndex === this.object.set.length) {
      return { done: true };
    }

    const result = {
      value: this.object.getElement(this.nextIndex),
      done: false,
    };

    this.nextIndex++;

    return result;
  }
}
