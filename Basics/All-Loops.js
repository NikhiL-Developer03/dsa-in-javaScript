// for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//       //console.log("5 is best number");
//   }
//   //console.log(element);
  
// }

// // console.log(element);

// for (let i = 1; i <= 10; i++) {
//   //console.log(`Outer loop value: ${i}`);
//  for (let j = 1; j <= 10; j++) {
//   //console.log(`Inner loop value ${j} and inner loop ${i}`);
//   //console.log(i + '*' + j + ' = ' + i*j );
//  }
  
// }
// let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   //console.log(element);
  
// }


// // break and continue

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }
// //    console.log(`Value of i is ${index}`);
  
// // }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//       console.log(`Detected 5`);
//       continue
//   }
//  console.log(`Value of i is ${index}`);
  
// }

// --two--

// let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// --three--
// // for of

// // ["", "", ""]
// // [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// // for (const [key, value] of myObject) {
// //     console.log(key, ':-', value);
    
// // }

// --four--
// const myObject = {
//   js: 'javascript',
//   cpp: 'C++',
//   rb: "ruby",
//   swift: "swift by apple"
// }

// for (const key in myObject) {
//   //console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//   //console.log(programming[key]);
// }

// // const map = new Map()
// // map.set('IN', "India")
// // map.set('USA', "United States of America")
// // map.set('Fr', "France")
// // map.set('IN', "India")

// // for (const key in map) {
// //     console.log(key);
// // }

// --five--
// const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach( function (val){
// //     console.log(val);
// // } )

// // coding.forEach( (item) => {
// //     console.log(item);
// // } )

// // function printMe(item){
// //     console.log(item);
// // }

// // coding.forEach(printMe)

// // coding.forEach( (item, index, arr)=> {
// //     console.log(item, index, arr);
// // } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

// --six--
// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
})


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
  // console.log(userBooks);

//   // --seven--
//   const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);

// --Eight--
// const myNums = [1, 2, 3]

// // const myTotal = myNums.reduce(function (acc, currval) {
// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc + currval
// // }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

// ---Testing---

const shoppingCart = [
      {   id:4,
          itemName: "js course",
          price: 2999
      },
      {
          id:3,
          itemName: "py course",
          price: 999
      },
      {   
          id:2,
          itemName: "mobile dev course",
          price: 5999
      },
      {
          id:1,
          itemName: "data science course",
          price: 12999
      },
  ]

  // const array = shoppingCart.map((prev,index) => {
  //   console.log(index," ", prev);
  //   // return prev;
  // })
  // console.log(array)

  // const res  = {...shoppingCart};



const fun = (id) => {
  let res = [...shoppingCart]
  const final = res.map((items) => items.id === id ? true : false);
  console.log(final);
}
 
fun(3);
