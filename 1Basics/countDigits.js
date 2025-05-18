// Question 3: Count the number of digits of a number

function countDigits(num){
  num = Math.abs(num); //edge-case
  let count = 0;
  while(num!=0){
    count++;
    num = Math.floor(num/10);
  }
  return count;

}
console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10
console.log(countDigits(0)); //0
console.log(countDigits(-1)); //1