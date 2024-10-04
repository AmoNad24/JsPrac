//PRIMITIVE DATATYPES ARE AS FOLLOWS:
// 7: String , Number, Boolean, null, undefined, Symbol, BigInt - THESE ARE NOT REFERENCED AND ARE CALL BY VALUE I.E COPIES OF THEM ARE MADE

//REFERENCE TYPE:

//ARRAYS,OBJECTS,FUNCTIONS


//SYMBOL

const id = Symbol('123');            
const another_Id = Symbol('123');
//BOTH ARE NOT SAME AND WILL RETURN DIFFERENT VALUES;
console.log(id === another_Id);
//OUTPUT: FALSE

//SINCE FUNCTION IS A DATATYPE IN JS WE CAN STORE IT AS A VARIABLE 

const a = function abc()
{
    console.log("Hello World");
}
a();

console.log(typeof a);


// OBJECT ARE REFERNCED AND NOT PASSED BY VALUE 
// let me give you an example:
let x = "bamboo";
let y = "bamboo";
// these two values are copies of the string "bamboo" they are stored in 2 different memory places

console.log(x==y);
console.log(x===y);

let v = {"name":"acb"};  
let z = {"name":"acb"};
// BY THE LOGIC WE SAW ABOVE v and z must be the same?

console.log(v==z); 
console.log(v===z); 

//BUT BOTH COMPARISONS RETURN FALSE AS EVEN IF THEY HAVE THE SAME VALUES STORED THEY ARE TWO INDEPENDANT OBJECTS

// https://javascript.info/object-copy READ THIS TO BE LESS CONFUSED