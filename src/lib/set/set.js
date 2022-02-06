'use strict';

class MySet {
  set = [];

  constructor(...initialElements) {
    this.set = initialElements.filter(
      (item, index) => initialElements.indexOf(item) === index
    );
  }

  add(element) {
    let numberOfMatches = 0;
    for (const value in this.set) {
      if (this.set[value] === element) {
        ++numberOfMatches;
      }
    }
    if (numberOfMatches > 0) {
      throw new Error('This set already has this element');
    } else {
      this.set.push(element);
      this.set.sort((a, b) => a - b);
    }
  }

  addRange(...array) {
    for (const value in array) {
      this.add(array[value], set);
    }
  }

  remov(element) {
    for (const value in this.set) {
      if (this.set[value] === element) {
        this.set.splice(value, 1);
        return true;
      }
    }
    return false;
  }

  contains(element) {
    for (const value in this.set) {
      if (this.set[value] === element) {
        return true;
      }
    }
    return false;
  }

  count() {
    return this.set.length;
  }

  clear() {
    this.set = [];
  }

  union(otherSet, currentSet = this.set) {
    const unionResult = this.setCopy(currentSet);
    for (const value in otherSet) {
      unionResult.push(otherSet[value]);
    }
    return unionResult.filter(
      (item, index) => unionResult.indexOf(item) === index
    );
  }

  intersection(otherSet, currentSet = this.set) {
    const intersectionResult = this.setCopy(currentSet);
    for (const value in otherSet) {
      intersectionResult.push(otherSet[value]);
    }
    return intersectionResult.filter(
      (item, index) => intersectionResult.indexOf(item) !== index
    );
  }

  difference(otherSet, currentSet = this.set) {
    const differenceResult = this.setCopy(currentSet);
    const intersectionResult = this.intersection(otherSet);
    for (let index = 0; index < differenceResult.length; index++) {
      const element = differenceResult[index];
      for (const value in intersectionResult) {
        if (element === intersectionResult[value]) {
          differenceResult.splice(index, 1);
          --index;
        }
      }
    }
    return differenceResult;
  }
  symmetricDifference(otherSet, currentSet = this.set) {
    const otherSetResult = this.difference(otherSet, currentSet);
    const currentSetResult = this.difference(currentSet, otherSet);
    return otherSetResult.concat(currentSetResult);
  }
  setCopy(set) {
    const copyResult = set.slice();
    return copyResult;
  }
}
