const a:number = 2;
let b:number = 3;

console.log(a + b);

function myFunctionIsAwesome(a:number, b:number) {
    console.log(a + b);
}

class Pencil {

  color: string = "black";

  constructor(color:string) {
    this.color = color;
  }
}

let number2:Pencil  = new Pencil("blue");

console.log(number2.color);
