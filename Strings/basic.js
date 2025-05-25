//String In JavaScript 

let firstName = "Nikhil";
// firstName.        // check string methods          

//length of a String

// console.log(firstName.length); // 6

//access string element

// console.log(firstName.charAt(0)); // N
// console.log(firstName.charAt(5)); // l
// console.log(firstName.charAt(6)); // 

// console.log(firstName[0]); // N
// console.log(firstName[5]); // l

// return a Ascii value of char
// console.log(firstName.charCodeAt(2)); // 107
// console.log(firstName.charCodeAt("N")); // 78

// return true or false if the char or substring is present or not
// console.log(firstName.includes("i")); // true
// console.log(firstName.includes("ikh")); // true

// return index of char
// console.log(firstName.indexOf("i")); // 1
// console.log(firstName.indexOf("l")); // 1

// console.log(firstName.lastIndexOf("i")); // 4

// compare two strings
let anotherName1 = "Nikhil";
let anotherName2 = "Nick";

// console.log(firstName.localeCompare(anotherName1)); // 0
// console.log(firstName.localeCompare(anotherName2)); // 1
// console.log(firstName.localeCompare(firstName)); // 0

// replace any string
const str = "Nikhil is a Software Developer. Nikhil is also a mern stack developer. Nikhil is good boy.";
// console.log(str.replace("Nikhil", "Nick"));
// console.log(str.replaceAll("Nikhil", "Nick"));
// console.log(str.replace(/Nikhil/g, "Nick")); // by using regex exp

// substring of string
// console.log(str.substring(6));
// console.log(str.substring(6,20));

// console.log(str.slice(6,20));
// console.log(str.slice(-11));
// console.log(str.slice(-11,0));

//search any string
// console.log(str.search("mern")); // 49
// console.log(str.search("earn")); // -1

//splite - return a char or sub-string into array
test1 = "Nikhil is mern dev";
test2 = "Nikhil,Deepak,Nishu";
test3 = "I am the best";
// console.log(test1.split(""));
// console.log(test2.split(","));
// console.log(test3.split(" "));


// const subString =  test1.split(" ");
// console.log(subString); // [ 'Nikhil', 'is', 'mern', 'dev' ]
// const joinAllstr = subString.join(" ");
// console.log(joinAllstr); //  Nikhil is mern dev

// return true or false start and end with given str 
// console.log(str.startsWith("Nikhil")); // true
// console.log(str.startsWith("Nick")); // false
// console.log(str.endsWith(".")); // true
// console.log(str.endsWith("Nikhil")); // false

// remove white space in string

let test4 = "     nikhil is the best     ";
// console.log(test4, test4.length);
// console.log(test4.trim(),test4.length);
// console.log(test4.trimStart(),test4.length);
// console.log(test4.trimEnd(),test4.length);

// return uppercase and lowercase of string
// differnce----->
// Use toUpperCase() / toLowerCase() for English.
// Use toLocaleUpperCase(locale) if you are handling other languages.

// console.log(str.toUpperCase()); 
// console.log(str.toLowerCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());

// convert number to string

// let num = 55;
// console.log(typeof num,num);
// console.log(typeof num.toString(),num.toString());

// convert object to string and string to obj
let obj = {
  name: "Nikhil",
  course: "DSA",
  email: "nikhil.developer03@gmail.com"
}
let objToStr = JSON.stringify(obj);
let strToObj = JSON.parse(objToStr)
// console.log(typeof obj, obj);
// console.log(typeof objToStr, objToStr);
// console.log(typeof strToObj, strToObj);

// concat two string
let lastName = " Developer";
// console.log(firstName.concat(lastName));
// console.log(firstName.concat(lastName, ", nick developer"));
// console.log(firstName + lastName);
// console.log(`${firstName}${lastName}`);