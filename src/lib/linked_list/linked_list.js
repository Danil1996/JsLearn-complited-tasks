'use strict';

class LinkedList {
  list = {};
  counter = 0;
  constructor() {}

  add(element) {
    let temporaryLink = this.list;
    while ('value' in temporaryLink) {
      temporaryLink = temporaryLink.next;
    }
    this.setElement(temporaryLink, element);
  }
  setElement(temporaryLink, element) {
    temporaryLink.value = element;
    temporaryLink.next = {};
    ++this.counter;
  }

  remove(element) {
    // If searching element first in list
    if (this.list.value === element) {
      this.list = this.list.next;
      --this.counter;
      return true;
    }
    // if searching element deep inside the list
    let tempoparyLink = this.list;
    while ('value' in tempoparyLink) {
      if (tempoparyLink.next.value === element) {
        tempoparyLink.next = tempoparyLink.next.next;
        --this.counter;
        return true;
      } else if (tempoparyLink.value !== element) {
        tempoparyLink = tempoparyLink.next;
      }
    }
    return false;
  }

  containse(element) {
    let temporaryLink = this.list;
    while ('value' in temporaryLink) {
      if (temporaryLink.value === element) {
        return true;
      } else if (temporaryLink.value !== element) {
        temporaryLink = temporaryLink.next;
      } else {
        return false;
      }
    }
  }

  count() {
    return this.counter;
  }

  copyTo(array) {
    let temporaryLink = this.list;
    while ('value' in temporaryLink) {
      array.push(temporaryLink.value);
      temporaryLink = temporaryLink.next;
    }
    return array;
  }

  clear() {
    this.list = {};
    this.counter = 0;
  }
}
