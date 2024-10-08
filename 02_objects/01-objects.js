//OBJECTS MADE USING CONSTRUCTORS ARE SINGLETONS
//OBJECTS DECLARED AS LITERALS ARE NOT SINGLETONS



//How to declare Symbols in JS
const mySym = Symbol("key1");


//Objects matlab keys and values;

//Object Literals

const JsUser = {
    name : "ABC", // mame can also be: "name",
    age : 18,
    [mySym]: "mykey1",
    location: "Delhi",
    lastLoginDays: ["Monday","Tuesday"]
}

// or
// Objects can be created with constructors using the create function
// Object.create



// ACCESSING OBJECTS
console.log(JsUser);//PRINTS WHOLE OBJECT
// console.log(JsUser[name]);  THIS IS INVALID
console.log(JsUser.name);
console.log(JsUser["name"]); //prefer this most of the times

console.log(JsUser[mySym]);



//Updation of Values
JsUser.location = "Bengaluru";
console.log(JsUser);//PRINTS WHOLE OBJECT

//Object.freeze(JsUser) => Freezes the values in the object 


Object.freeze(JsUser)

JsUser.location = "Chandigarh";//THIS WILL NOT THROW AN ERROR BUT THE VALUES WON'T BE UPDATED
console.log(JsUser);//PRINTS WHOLE OBJECT




