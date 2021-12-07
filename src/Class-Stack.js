'use strict';
// Класс Stack

// Метод push
//  • Поведение: Добавляет элемент на вершину стека.
//  • Сложность: O(1).

// Метод pop
//  • Поведение: Удаляет элемент с вершины стека и возвращает его. Если стек пустой, кидает исключение.
//  • Сложность: O(1).

// Метод peek
//  • Поведение: Возвращает верхний элемент стека, но не удаляет его. Если стек пустой, кидает исключение.
//  • Сложность: O(1).

// Метод count
//  • Поведение: Возвращает количество элементов в стеке.
//  • Сложность: O(1).

class Stack {
  constructor(name) {
    this.name = name;
  }
  stack = [];
  push(element, ...args) {
    this.stack.push(element);
    for (const element of args) {
      this.stack.push(element);
    }
  }

  pop() {
    try {
      if (this.stack.length === 0) {
        throw new Error('Stack is empty');
      }
      console.log(this.stack.pop());
    } catch (e) {
      console.log('Error: ' + e.message);
    }
  }

  peek() {
    try {
      if (this.stack.length === 0) {
        throw new Error('Stack is empty');
      }
      let stackLength = this.stack.length;
      console.log(this.stack[stackLength - 1]);
    } catch (e) {
      console.log('Error: ' + e.message);
    }
  }

  count() {
    console.log(this.stack.length);
  }
}
