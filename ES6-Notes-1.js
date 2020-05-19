//let will result in a syntax error if you declare it twice
var name1 = "James"; var name2 = "James2"; //This will execute with no errors
let name2 = "Valerie"; let name2 = "Valerie2"; //This will result in a syntax error

//const can't be changed or overwritten
const NAME3 = "Fred";

//"use strick" will throw errors to catch common mistakes and "unsafe" actions
"use strict";

//let has better scoping than var. Let declared in a block, statement, or expression is local to that piece of code
//In the below i is a global variable
for (var i = 0; i < 3; i++) {
    numArray.push(i);
  };

//In the below i is a local variable
for (let i = 0; i < 3; i++) {
    numArray.push(i);
  };

//values in const variables are still mutable, they just can't be overwritten
const VARRAY = [1, 2, 3];
VARRAY[1] = 5; //This works fine
const VARRAY = [1,5,3]; //This will now work

//Object.freeze() prevents mutation
Object.freeze(VARRAY);
VARRAY[1]=100; //This will no longer work

//The following functions are equivalent
const myFunc = function() { 
  const myVar = "value"; 
  return myVar;
  }
  
//Unnamed function since it gets passed into a variable
const myFunc = () => { 
const myVar = "value"; 
return myVar;
}
  
//Below we can omit the "return" and {} since the function just returns a value
const myFunc = () => "value";
  
//Arrow functions with one input can be written without ()
const doubler = item => item * 2;
  
//Arrow functions can use multiple inputs, but they require ()
const multiplier = (item, multi) => item * multi;
  
//Functions can have default parameters
const greeting = (name = "Anonymous") => "Hello " + name;

//"..." can be used to allow a flexible number of entries into a function.
//The below function sumns any number of values that get input
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0); //Reduce applies a function to all values in an array, in this case adding them
}

//Apply makes an array act like a comma seperated list of values
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // Inputs the array as though it were (6, 89, 3, 45)
//... can be used in ES6 to do the same thing and is easier to read
const maximus = Math.max(...arr);