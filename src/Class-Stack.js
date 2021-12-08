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
  #stack = [];

  push(...args) {
    for (const element of args) {
      this.#stack.push(element);
    }
  }

  pop() {
    if (this.#stack.length === 0) {
      throw 'Stack is empty';
    }
    return this.#stack.pop();
  }

  peek() {
    if (this.#stack.length === 0) {
      throw 'Stack is empty';
    }
    return this.#stack[stackLength - 1];
  }

  count() {
    return this.#stack.length;
  }
}
