// Question 2: Sum of digits of a number
// 1234    1+2+3+4=10

function sumofdigits(num){
  let rem = 0;
  let sum = 0; 
  while(num!=0){
    rem = num % 10;
    num = Math.floor(num/10)
    sum+=rem;
  }
  return sum;
}

console.log(sumofdigits(1234));

// let num = 1234;
// let rem = num%10;
// num = math.floor;
// console.log(rem);
// console.log(num);

// Question 2: Sum of digits of a number
// 1287: 1+2+8+7 = 18

function sumOfDigits(num){
  let sum = 0;
  while(num>0){
    sum += num%10;
    num = Math.floor(num /10);
  }
  return  sum;
}
console.log(sumOfDigits(1287));