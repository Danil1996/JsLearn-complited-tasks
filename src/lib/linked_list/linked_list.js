'use strict';

class LinkedList {
  list = {};
  counter = 0;
  constructor() {}

  // Добавляет элемент в конец списка.
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

  // Удаляет первый элемент списка со значением, равным переданному. Возвращает true, если элемент был удален и false в противном случае.
  remov(element) {
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

  // Возвращает true или false в зависимости от того, присутствует ли искомый элемент в списке.
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

  // Возвращает количество элементов списка. Возвращает 0, если список пустой.
  count() {
    return this.counter;
  }

  // Копирует содержимое списка в указанный массив, начиная с указанного индекса.
  copyTo(array, startingIndex) {}

  // Удаляет все элементы из списка.
  clear() {}
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(5);
list.add('string');

console.log(list.containse('string'));
