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