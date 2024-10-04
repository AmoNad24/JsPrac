// let someNumber = 33;
// let val = String(someNumber);
// console.log(val);//33
// console.log(typeof val);//string

//String1 + String2

// let s1 = "Hello";
// let s2 = "World";

// let s3 = s1 + s2;

// console.log(s3); // OUTPUT: HelloWorld


//Now some confusing parts

console.log(1 + "2"); //OUTPUT: 12
let a = 1 + "2";
console.log(a); //OUTPUT: 12
console.log(typeof a); // string


console.log("2 " + 1); //OUTPUT WILL BE A STRING: "2 1"

console.log("2" + 1 + 2); //OUTPUT: "212"

console.log(2 + 1 + "2"); // OUTPUT: "32", FIRST PERFORMS 1+2 AND THEN CONVERTS THE RESULT TO STRING


//CONFUSING BOOLEAN
console.log(true); //OUTPUT: true
console.log(+true); // OUTPUT: 1
console.log(true); // OUTPUT: true
// console.log(true+) SYNTAX ERROR 
console.log(+"")// OUTPUT: 0