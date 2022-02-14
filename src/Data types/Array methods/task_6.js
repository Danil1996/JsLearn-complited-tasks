'use strict';

/*Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.
First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
Usage example:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
For instance, let’s add the multiplication *, division / and power **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.*/

function Calculator(string) {
  (this.parse = function (string) {
    this.splitResult = string.split('');
    return this.splitResult;
  }),
    (this.calculate = function () {
      if (this.splitResult[1] == '+') {
        this.result = +this.splitResult[0] + +this.splitResult[2];
        return this.result;
      } else if (this.splitResult[1] == '-') {
        this.result = +this.splitResult[0] + +this.splitResult[2];
        return this.result;
      }
    });
}

let calc = new Calculator();
calc.parse('1+2');
calc.calculate();
console.log(`Calc = ${calc.result}`);

let powerCalc = new Calculator();

powerCalc.newMethods = function () {
  if (this.splitResult[1] == '/') {
    this.result = +this.splitResult[0] / +this.splitResult[2];
    return this.result;
  } else if (this.splitResult[1] + this.splitResult[2] == '**') {
    this.result = (+this.splitResult[0]) ** +this.splitResult[3];
    return this.result;
  } else if (this.splitResult[1] == '*') {
    this.result = +this.splitResult[0] * +this.splitResult[2];
    return this.result;
  }
};

powerCalc.parse('2**2');
powerCalc.newMethods();
console.log(`PowerCalc = ${powerCalc.result}`);
