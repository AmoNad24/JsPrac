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