function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

let count = outer();
count();
count();

let count2 = outer();
count2();
count2();
count2();

let obj1 = { name: "Test", age: 20 };
let obj2 = { gender: "male", age: 21 };
let obj3 = { ...obj2, ...obj1 };
console.log(obj3);

