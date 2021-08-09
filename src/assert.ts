// 类型断言

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// let strLength: number = (someValue as string).length;

// x! 将从 x 值域中排除 null 和 undefined
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}

type NumGenerator = () => number;

function myFunc1(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}

let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}

// let x!: number;
// initialize();
// console.log(2 * x); // Ok

// function initialize() {
//   x = 10;
// }