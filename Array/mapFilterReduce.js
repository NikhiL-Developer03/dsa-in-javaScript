// map() function take callback function excute each element of function 

// Map in javaScript
const employees = [
  { name: 'nikhil', age: '32' },
  { name: 'Aman', age: '31' },
  { name: 'rohit', age: '30' }
]

// const emp = employees.map((employee) => {
//   return employee.name;
// })
// console.log(emp);

// Polyfill of Map

// Array.prototype.myMap = function (callback) {
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(callback(this[i],i,this));
//   }
//   return res;
// }

// const myemp = employees.myMap(function(employee){
//   return employee.name;
// })
// console.log(myemp);

//Filter in javascript
const Products = [
  { name: 'iphone', price: 999, instock: true },
  { name: 'samsung', price: 899, instock: false },
  { name: 'google pixel', price: 799, instock: true }
]

// const availableProducts = Products.filter((product)=> product.instock)
// console.log(availableProducts);

// const availableProducts = Products.filter(function (product) {
//   return product.instock === true;
// })
// console.log(availableProducts);

// Polyfill of filter 

// make sure you always not us arrow function.because arrow function this point outer function
Array.prototype.myFilter = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
}

// const myAvailableProducts = Products.myFilter((product) => {
//   return product.instock === true;
// })
// console.log(myAvailableProducts);

// const myAvailableProducts = Products.myFilter(function(product){
//   return product.instock === true;
// })
// console.log(myAvailableProducts);



