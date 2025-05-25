// Sorting in JavaScript

// Sort a Array
// the default sort order is ascending, built upon converting the elements into strings 
// -2, -7, 1000, 5 => "-2","-7","1000","5";

// sort an array
const arr = [-2, -7, 1000, 5];
// console.log(arr.sort()); // [ -2, -7, 1000, 5 ]
// console.log(arr.sort((a, b) => a - b)); 
// console.log(arr.sort((a, b) => b - a)); 

// Sort a String 

let str = "Nikhil";
let smallStr = str.toLowerCase();
// to sort a string all letter are small or either capital
// console.log(str);
// Ascii value of A = 65 & a = 97;
// console.log(smallStr.split("").sort().join(""));

// Bubble sort in JavaScript

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - i; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //swap another method
        // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swap = true;
      }
    }
    if (swap == false) return arr;
  }
  return arr;
}

let test1 = [10, 1, 7, 6, 14, 9];
let test2 = [1, 6, 7, 9, 10, 14];
// console.log("test1", bubbleSort(test1));
// console.log("test2", bubbleSort(test2));
// console.log("arr", bubbleSort(arr));

// Time complexity :- 
// Best Case - O(N)
// Worst Case - O(n^2)
// space complexity : O(1) 

// Selection sort in JavaScript

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr;
}

console.log("test1",selectionSort(test1));
console.log("arr",selectionSort(arr));
console.log("arr",selectionSort(arr));