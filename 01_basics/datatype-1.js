console.log(typeof null);//object
console.log(typeof undefined);//undefined

let score = 33

console.log(typeof score);//number
console.log(typeof(score));//number



score = "33";
console.log(typeof score);//string
console.log(typeof(score));//string


//converting the string 33 to number 33

let val = Number(score);
console.log(typeof val);//now this val will result in a number

//lets convert 33abc to a number and see what happens
score  = "33abc"
let val2 = Number(score);
console.log(typeof val2);//number
console.log(val2);//But the output is NaN=Not a Number

score = null;//lets see what happens here
let val3 = Number(score);
console.log(val3);//outputs 0


score = undefined;
let val4 = Number(score);
console.log(val4)//output NaN = Not a Number

//boolean values true = 1 and false = 0

//Now lets convert some values to boolean

let a = "";
let val5 = Boolean(a);
console.log(val5);
// "ABC"=>true
//1234=>true
