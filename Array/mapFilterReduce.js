// Map in javaScript
const employees = [
  {name : 'nikhil', age:'32'},
  {name : 'Aman', age:'31'},
  {name : 'rohit', age:'30'}
]

const emp = employees.map(function(employee){
  return employee.name;
})
console.log(emp);

// Array.prototype.myMap = function(callback){
// const res = [];
// for(let i=0;i<this.length;i++){
//   res.push()
// }
// }