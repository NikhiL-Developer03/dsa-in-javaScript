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

const findElementIndex = (arr,target) => {
  for(let i of arr){
    if (i === target) {
      return i;
    }
  }
  return -1;
}
// console.log(findElementIndex(arr,3));
console.log(arr.indexOf(4));
