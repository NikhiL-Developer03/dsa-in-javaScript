// How do you create an empty array in javscript

// const arr = [];
// const array = new Array();
// console.log(array); //[]
// console.log(arr);   //[]

const arr = [1, 2, 3, 4, "Hello", { name: "nikhil" }, [1234], 9];

// console.log(arr);
// console.log(Array);

// How to access first and last element of array

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length - 2]);

// how to remove element in array

// const lastElement = arr.pop();
// console.log(lastElement)
// console.log(arr);

// const firstElement = arr.unshift(786);
// console.log(firstElement); //it return the length og array after deleting the element
// console.log(arr)

// const shift = arr.shift();
// console.log(shift); //it return the first element of array
// console.log(arr); //it return the array after deleting the first element of array

// Looping in javaScript
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// arr.forEach((element,index) => {
//   console.log(index,element)
// });

// for(let i of arr){
//   console.log(i);
// }

// for(let i in arr){
//   console.log(i,arr[i]);
// }

// arr.map((item) => {
//   console.log(item);
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
// console.log(findElement(arr,9)); //true
// console.log(findElement(arr,0)); //false

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
// console.log(findElementIndex(arr,3));
// console.log(arr.indexOf(4));

// How to delete, add and upadet from a specific index

// slice() method can be used to create a copy of an array or return a portion of an array.
// slice() method does not alter the original array but instead creates a shallow copy.
// slice(optional start parameter, optional end parameter)
// last index not considered in it

// console.log(arr);
// console.log(arr.slice(0,3));
// console.log(arr.slice(-5));

// splice() method will change the contents of the original array
// splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
// splice(start, optional delete count, optional items to add)

// console.log(arr.splice(1,2))
// console.log(arr);
// console.log(arr.splice(1,0,2,3))
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

// let arr2 = [...arr1];
// let arr2 = Array.from(arr1);
// let arr2 = arr1.concat();

// console.log("before :",arr1);
// console.log("before :",arr2);
// console.log(arr2.splice(1,3));
// console.log("after :",arr1);
// console.log("after Delete arr2 :",arr2);

//How to add two array in javaScript

// const newArr = [...arr,9211,786];
// console.log(newArr);

// let backup = arr.concat();
// console.log(backup);

// how to check two array are equal or Not

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6];

const isArrayEqual = (arr1, arr2) => {
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }
  // for (let index = 0; index < arr1.length; index++) {
  //   if (arr1[index] !== arr2[index]) {
  //     return false;
  //   }
  // }
  // return true;

  return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
 
};

// console.log(isArrayEqual(arr1, arr2));

// How to sort an array in ascending or descending order in array ?

// const x = [1,4,6,9,0,-9,-5,123];
// console.log(x.sort()); 
// console.log(x.sort((x,y)=>(x-y)));
// console.log(x.sort((x,y)=>(y-x)));

// how to reverse an array?

// const x = [1,4,6,9,0,-9,-5,123];
// console.log(x.reverse());

// Flat: [1,2,3,4,5,6,7,8,9]

// const y = [1,2,[3,[4,5]],6,7,8,9];
// console.log(y.flat(2));

