// index.js

// variables are declared with var, let, const
// var == generic variable (no scope)
// let == scoped variable (traditional scope)
// const == a constant variable, (can't change)

console.log("Example Variables");
let a = 2;
const b = 3;
a = 3;
// b = 4; CANT DO IT CAPTAIN

console.log(a + b);

myFunctionIsAwesome("1", "2");

function myFunctionIsAwesome(a, b) {
  console
    .log("The answer is", a + b);
}

class Pencil {
  constructor(color) {
    this.color = color;
  }
  write(something) {
    this.history = something;
    console.log(something);
    return this;
  }

  erase() {
    this.history = null;
    return this;
  }

  seeHistory() {
    console.log(this.history);
    return this;
  }
}

let number2 = new Pencil('black');
number2
  .write('SAT time')
  .seeHistory()
  .erase()
  .seeHistory();

  number2.shavedDown = true;

console.log(number2.color);
