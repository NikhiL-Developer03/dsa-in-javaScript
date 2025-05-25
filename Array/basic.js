// How do you create an empty array in javscript

// const arr = [];
// const array = new Array();
// console.log(array); //[]
// console.log(arr);   //[]

const arr = [1, 2, 3, 4, "Hello", { name: "nikhil" }, [1234], 9];

// console.log(arr); // [ 1, 2, 3, 4, 'Hello', [ 1234 ], 9 ]
// console.log(typeof arr); // object
// console.log(Array); // [Function: Array]
// console.log(typeof Array); // function

// How do you access the first and last elements of an array?

// const firstElement = arr[0]; //O(1)
// const arrLength = arr.length; 
// const lastElement = arr[arrLength - 1];
// console.log(firstElement, arrLength, lastElement);

// How do you remove the last element from an array?

// const lastElement1 = arr.pop(); // O(1)
// console.log(arr, lastElement1); 

// How do you add an element to the end of an array?

// arr.push(5); // O(1)
// console.log(arr);

// How do you add an element to the start of an array?

// const firstElement = arr.unshift(786); //O(N)
// console.log(firstElement); //it return the length of array after adding the element
// console.log(arr)

// How do you remove the first element from an array?

// const shift = arr.shift(); // O(N)
// console.log(shift); // it return the first element of array
// console.log(arr);

// How do you loop through an array in JavaScript?

// for(let i=0;i<arr.length;i++){
//   console.log(i,arr[i]);
// }

// arr.forEach((element,index) => {
//   console.log(index,element)
// });

// for of loop
// for(let i of arr){
//   console.log(i);
// }

// for in loop 
// for(let i in arr){
//   console.log(i,arr[i]);
// }

// arr.map((item,index) => {
//   console.log(index,item);
// });

// Ques-1 How do you check if an element exists in an array

const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};
// console.log(arr);
// console.log(findElement(arr,9)); //true
// console.log(findElement(arr,0)); //false

// Includes - check exit or not and return true and false
// console.log(arr.includes(4)); //true
// console.log(arr.includes(10)); //false

// Ques-2 How do you check if an element exists in an array the return index

const findElementIndex = (arr, target) => {
  for (let i of arr) {
    if (i === target) {
      return i;
    }
  }
  return -1;
};
// console.log(arr);
// console.log(findElementIndex(arr, 3));
// console.log(findElementIndex(arr, 6));

//indexof - check the index exit or not in that array and retur index of particular item

// console.log(arr.indexOf(4));

// How to delete, add and upadet from a specific index

// slice() method can be used to create a copy of an array or return a portion of an array.
// slice() method does not alter the original array but instead creates a shallow copy.
// slice(optional start parameter, optional end parameter)
// last index not considered in it

// console.log(arr);
// console.log(arr.slice(0)); // complete array
// console.log(arr.slice(0,3)); // [ 1, 2, 3 ]
// console.log(arr.slice(-1));  // [ 9 ]
// console.log(arr.slice(-5)); // [ 4, 'Hello', { name: 'nikhil' }, [ 1234 ], 9 ]

// splice() vs slice()

// splice() method will change the contents of the original array
// splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
// splice(start, optional- delete count, optional - items to add)

// console.log(arr);
// console.log(arr.splice(1,2)) // [ 2, 3 ]
// console.log(arr);

// console.log(arr);
// console.log(arr.splice(1,0,1,3))
// console.log(arr);

// shallow copy of array

// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = arr1;
// console.log("before :",arr1);
// console.log("before :",arr2);
// console.log(arr2.splice(1,3));
// console.log("after :",arr1);
// console.log("after :",arr2);

// deep copy of Array

// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = [...arr1]; // spread 
// // let arr2 = Array.from(arr1); //from() method
// // let arr2 = arr1.concat(); //concat

// console.log("before arr1 :",arr1);
// console.log("before arr2 :",arr2);
// console.log("splice from arr2 :",arr2.splice(1,3));
// console.log("after arr1 :",arr1);
// console.log("after arr2 :",arr2);

// How to concatenate two arrays in JavaScript?

// let arr1 = [1, 2, 3, 4, 5, 6, 7]
// let arr2 = [8, 9, 10]
// const newArr1 = [...arr1, 8, 9, 10];
// const newArr2 = arr1.concat(arr2);
// console.log("newArr1 : ", newArr1);
// console.log("newArr2 : ", newArr2);

// How can you check if two arrays are equal?

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [1, 2, 3, 4, 5, 6];

const isArrayEqual = (arr1, arr2) => {
  //edge-case
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;

  // One Line solution
  // return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i]);

};
// console.log(isArrayEqual(arr1, arr2));

// How to sort an array in ascending and descending order?
// sort() // O(NLogN)

let x = [1, 4, 6, 9, 0, -9, -5, 123];

// console.log(x.sort()); // [-5, -9, 0, 1,123,  4, 6, 9]
// console.log(x.sort((x, y) => (x - y))); // ascending
// console.log(x.sort((x, y) => (y - x))); // descending

// Just knowing and testing purpose

// let asc = x.sort((a, b) => {
//   if (a < b) return -1; // a comes first
//   if (a > b) return 1;  // b comes first
//   return 0;             // no change
// });
// // This works the same way:
// // a - b < 0 → a comes first
// // a - b > 0 → b comes first
// // a - b == 0 → no change
// console.log(asc);


// How to reverse an array?

// const y = [1, 4, 6, 9, 0, -9, -5, 123];
// console.log(y.reverse());

// Map, Filter & Reduce

// const newMapArr = x.map((ele, i) => ele * ele);
// console.log(newMapArr);

// const positiveNumbers = x.filter((ele, i) => ele > 0);
// console.log("Positive Num :",positiveNumbers);

// const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele);
// console.log("Sum of Num :",sumOFArr);

// filter() vs find()

// const positiveNumber = x.find((ele, i) => ele > 0);
// console.log(positiveNumber);

// How to flat array of arry(inside another array)
// Flat: [1,2,3,4,5,6,7,8,9]

// const z = [1, 2, [3, [4, 5]], 6, 7, 8, 9];
// console.log(z.flat(2));

