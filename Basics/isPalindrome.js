
// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

// it will help to convert string to integer
// console.log(+"5");

// let ispalindrome = function(x){
//   return (x<0) ? false : x === +x.toString().split("").reverse().join("");
// }
// const ans = ispalindrome(450);
// console.log(ans);

// 1. WAP to check whether a number is Palindrome Number or not
//     (121,1234321)

// Palindrome n = 12321 = 12321

// function isPalindrome(num) {
//   let n = num;
//   let rem = 0;
//   let res = 0;
//   while (n) {
//     rem = n % 10;
//     res = res * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   res===num ? console.log(`Palindrome Number : ${res}`) : console.log(`Not Palindrome : ${res}`);
// }

// isPalindrome(121);
// isPalindrome(12321);
// isPalindrome(12345);
