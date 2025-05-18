//-------------------------------------
//Imp : if color is black means string and if blue means number in chrome console

// Relation between number and string
let a = 10;
let b = "20";
// console.log(typeof(a+b)); //string

a = 10; b = 20;
// console.log("Sum of 10 and 20 = " + a+b); 
// console.log(a+b + " is Sum of 10 and 20"); 
// console.log("Sum of 10 and 20 = " + (a+b)); 

//type Conversion
// console.log("1"+1); //11 [+ operator is do concat and add] 
// console.log("1"-1); //0  [- oprator is only used for sub]
// console.log("1"*1); //1  [* for divide only]
// console.log("1"/1); //1  [/ for divide only]

// type casting - convert on type to other type called type casting and type Conversion
let myage = "21";
let num = Number(myage);
// console.log(num);

// swap a number by using three methods

//with extra variable/space
a = 10; b = 20;
let c;
c = a;
a = b;
b = c;
// console.log(a, b);

//without extra variable/space
a = 10; b = 20;
a = a + b;
b = a - b;
a = a - b;
// console.log(a, b);

//array destructuring.
a = 10; b = 20;
[a, b] = [b, a]
// console.log(a, b)

// Divide - /
// a = 7; b = 2;
// console.log(a / b); //3.5
// console.log(Math.floor(a / b)); //3

// a = 7; b = 2;
// console.log(a % b); //1
// console.log(b % a); //2 if dividend < divisor = dividend

// Modulas - %
a = 4563; b = 4560;
// if you want last digit from a number
// console.log(a % 10); //3
// console.log(b % 10); //0
// if you remove last digit from a number
// console.log(a / 10); //456.3
// console.log(Math.floor(a / 10)); //456

// !=
// console.log(10!=10); //false
// console.log(10!=11); //true

// ===,==,=
// a = 10;b="10"; //assign
// console.log(a == b); ///true - equale hain ki nahi
// console.log(a === b); //false - type checking

// unary operator ++ --
//a++,++a,--a,a--

// Math in built function
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.8));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-45));
// console.log(Math.max(75,68,100));
// console.log(Math.min(75,68,100));
// console.log(Math.random());   //random value from 0 to 1

//Imp - technique --- >
// console.log(0.545*10); //5.45
// console.log(Math.random()*10); //0 to 1
// console.log("OTP Genrator:",Math.floor((Math.random()*9000)+1000)); //0 to 999

//Math.random() - range - 0 to 1
// (0 to 1)*9000 - range - 0 to 9000
// now we want 4 digit number every time
// (0 to 9000) + 1000 - range between 1000 - 10000 but not include - 1000,10000

//toFixed - take how many value from dot/point
// a = 89.6956;
// console.log(a.toFixed(2));
// console.log(typeof(a.toFixed(2)));

// Nested Ternary oprator
num = 0;
// console.log(num > 0 ? "Postive" : num < 0 ? "Negative" : "Zero");

//Switch-Case
// let exp = "/logout";
// switch (exp) {
//   case "/login": console.log("Login Route");
//     break

//   case "/logout": console.log("Logout Route");
//     break

//   default: console.log("No Route Define")
// }

// switch (true) {
//   case 19 < 6: console.log("hey");
//     break

//   case 1 > 9: console.log("hello");
//     break

//   default: console.log("kem chau...!")
// }

// ---------------------------------------------------
// jitni jaada line utna bada size file ka
// 1mb vs 100mb
// 6000 line ka code -> file size jada ->user ko time lagega load karne mein website ko

//Loop
// for -
// while - use karte hai jab pata ho rukna kab h 
// Factorial od num
// Factors of num
// Sum of all natural num
// prime num

function isPrime(n) {
  let flag = true;
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function isoptiPrime() {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
// explain -> Mathmatically proof - agar koi number 2 se lekar uske sqrt tak bhi divde nahi hua toh uske aage bhi nahi hoga
// n = 37 
// sqt of 37 = 6  3,4,5,6 -> 6 

let n = 19;
// console.log(isPrime(n))
// console.log(isoptiPrime(n))

// break and continue
// break loop ko rokta hai 
// continue loop mein ek itration ko skip kar deta hai 

// for (let i = 1; i <= 22; i++) {
// if (i === 11) break;
// if (i === 11) continue;
// console.log(i);
// }

// sum of digit 

function sumofdigit(num) {
  let n = num;
  let sum = 0;
  while (n > 0) {
    sum = sum + n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
// console.log(sumofdigit(1234));
// 1234%10 -> 4
// 1234/10 -> 123%10 -> 3 
// 123/10 -> 12%10 -> 2  
// 12/10 -> 1%10 -> 1 
// 1/10 -> 0 

// reverse num
// strong num - 145 === 1! + 4! + 5! 
// 145 === 145 (<--strong number)

//Pattern programs
// n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// console.log("starting");

// Array
// let array = [1,2,3,4,5,6];
// array.push(100);
// console.log(array);

// for(let i=0;i<array.length;i++){
//   console.log(`array items ${array[i]}`);
// }

//Object
// let obj = {
//   k1:"1",
//   k2:"2",
//   k3:"3",
//   k4:"4",
//   k5:"5",
// }

// console.log(obj);
// for (const key in obj) {
//   console.log(`key = ${key} and ${obj[key]}`)
// }

// obj.k3="9";
// console.log(obj);

// function hello(name) {
//   console.log(`Hello ${name}`);
// }

// let friend = ["Ram", "Aman", "Raj"];
// friend.forEach((element) => hello(element));

// console.log("Ending");
