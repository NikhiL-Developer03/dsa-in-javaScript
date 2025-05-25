// Map in JavaScript

// A Map is a built-in collection object in JavaScript that stores key-value pairs.
// Unlike regular JavaScript objects ({}), a Map can use any value (including objects and functions) as keys.

/*
🔑 Key Characteristics of Map:
Feature	                     Object	                  Map
Key type	                   Only strings/symbols	    Any value (object, function, etc.)
Key order   	               Not guaranteed	          Insertion order preserved
Size                         property	No	            ✅ map.size
Iteration	                   Not directly iterable	  ✅ Can be iterated directly
Performance for large data	 Moderate	                Faster for frequent additions/removals
*/

// differnce - Map and Object
//  -- Map are iterable. but object are not 

// Object in JavaScript
const obj = new Object();
const obj1 = {};
// console.log(obj); // {}
// console.log(obj1); // {}
obj[21] = "Nikhil"; // { '21': 'Nikhil' } in object key allways be a string
// console.log(obj)

// Map in JavaScript
const map = new Map();
// console.log(map); // Map(0) {}
// map.set(21,"age"); // Map(1) { 21 => 'age' } in map key will be anything
// map.set(true,"isStudent"); 
// console.log(map); 

// ------------------------------------
//Add items using set()
map.set("name", "Nikhil");
map.set("age", 23);
map.set({ id: 1 }, "UserObject"); // using an object as key
// console.log(map);

//Access values with get()
// console.log(map.get("name")); // "Nikhil"

// Check if a key exists with has()
// console.log(map.has("age")); // true

//Remove an item with delete()
// map.delete("age");

// Get number of entries
// console.log(map.size); // 2

// Get number of entries
// map.clear();

//  Iterating over a Map:
// - for...of
map.set("a", 1);
map.set("b", 2);

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// - forEach

// map.forEach((value, key) => {
//   console.log(`${key} => ${value}`);
// });

// Advanced Features:

// - Objects as keys:
let obj3 = { id: 1 };
map.set(obj3, "objectValue");

// console.log(map.get(obj3)); // "objectValue"

// - Functions as keys:
let func = () => { };
map.set(func, "functionValue");

// console.log(map.get(func)); // "functionValue"

// -----------------------------------
// Sort Characters By Frequency
const test = new Map();
let str = "nikhil";
// for (let ch of str) {
//   if (test.has(ch)) {
//     test.set(ch, test.get(ch) + 1);
//   }
//   else {
//     test.set(ch, 1);
//   }
// }
// for (let ch of str) {
//   test.set(ch, (test.get(ch) || 0) + 1);
// }
// console.log(test);