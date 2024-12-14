// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

let a = 0;
let b = 1;
let n = 8;
process.stdout.write(a + " ");  // Prints without a new line
process.stdout.write(b + " ");
for (let i = 1; i < n; i++) {
  let ans = a + b;
  process.stdout.write(ans + " ");
  a = b;
  b = ans; 
}
