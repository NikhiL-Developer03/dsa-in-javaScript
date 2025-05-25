// Linear Search in JavaScript - O(N)

let larr = [1, 2, 3, 4, 5, 6, 0, -5]

let linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return  i;
    }
  }
  return -1;
}

// console.log(linearSearch(larr, 8)); // 7 
// console.log(linearSearch(larr, 15)); // -1

// Another way to search

// console.log(arr.includes(8)); // true
// console.log(arr.indexOf(8)); // 7
// console.log(arr.find((num) => num > 0));
// console.log(arr.findIndex((num) => num < 0));

// String Methods : match(), search(), indexof(), includes()

// Binary Search in JavaScript

let BinarySearch = (arr, target) => {
  let start = 0; let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // let mid = Math.floor((start + ((end - start)/2)));
    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] > target) {
      end = mid - 1;
    }
    else {
      // (arr[mid] < target) 
      start = mid + 1;
    }
  }
  return -1;
}

let barr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(BinarySearch(barr, 4)) // 3
console.log(BinarySearch(barr, 10)) // 9 
console.log(BinarySearch(barr, 1)) // 0
console.log(BinarySearch(barr, 11)) // -1