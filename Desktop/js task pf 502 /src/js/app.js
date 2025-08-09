
let a = [2, 3, 4, 3, 5, 6, 7, 8, 9, 10, 18, 19, 20];
function SumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(SumNumbers(a));



let b = [3, 7, 2, 9, 1];
function theGreatestNumber(arr) {
  return Math.max(...arr);
}
console.log(theGreatestNumber(b));



let c = [3, 7, 2, 9, 1, 6, 8, 9, 345, 123, 213, 233, 234, 2342];
function reversedNumbers(arr) {
  return [...arr].reverse();
}
console.log(reversedNumbers(c));



let d = [1, 2, 3, 4, 5, 6];
function evenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(evenNumbers(d));



let data = { name: "Ali", age: 25, city: "Baku", prof: "dev" };
function calculateKeys(key) {
  console.log("Number of keys:", Object.keys(key).length);
}
calculateKeys(data);



let numberValues = { a: 10, b: "hello", c: 20, d: 30 };
function sumNumberValues(obj) {
  return Object.values(obj)
    .filter(value => typeof value === "number")
    .reduce((acc, val) => acc + val, 0);
}
console.log(sumNumberValues(numberValues));



let sameNumbers = [1, 2, 3, 3, 4, 5, 6, 6, 8, 8, 9, 10, 11, 12, 12, 13, 14];
function deleteSameNumbers(arr) {
  return [...new Set(arr)];
}
console.log(deleteSameNumbers(sameNumbers));



let dataOne = [1, 2, 3, 4, 5, 6];
let dataTwo = [2, 5, 6, 9, 10, 23];
function deleteDublicateNumbers(arr1, arr2) {
  let dublicate = arr1.filter(num => arr2.includes(num));
  console.log("Dublicate numbers", dublicate);
}
deleteDublicateNumbers(dataOne, dataTwo);



let arr9 = [1, 2, 3, 4, 5];
function evenOrOdd(arr) {
  let even = arr.filter(num => num % 2 === 0);
  let odd = arr.filter(num => num % 2 !== 0);
  console.log("Evens:", even);
  console.log("Odds:", odd);
}
evenOrOdd(arr9);





function fibonacciArray(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
  }
  console.log(fibonacciArray(6));
  


let objA = { a: 1, b: 2 };
let objB = { b: 3, c: 4 };
function mergedObjects(obj1, obj2) {
  let result = Object.assign({}, obj1, obj2);
  console.log(result);
}
mergedObjects(objA, objB);



let nums = [0, 1, 0, 3, 12];
function moveZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      i--;
    }
  }
  return arr;
}
console.log(moveZeroes(nums));
