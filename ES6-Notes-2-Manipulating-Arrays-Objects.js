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

//Data can be pulled from an object using the object.variable notation in ES5
const user = { name: 'John Doe', age: 34 };
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
//ES6 has a cleaner way to pull data from an object
const { name, age } = user; // name = 'John Doe', age = 34

//An object can be destructured and assigned to variables using the following syntax
const user = { name: 'John Doe', age: 34 }; //Assign values to object
const { name, age } = user; // name = 'John Doe', age = 34

//Variables can be renamed while being destructured
const { name: userName, age: userAge } = user;

//Destructuring embedded objects
const user = {johnDoe: { age: 34,email: 'johnDoe@freeCodeCamp.com'}};
const { johnDoe: { age, email }} = user;

//Arrays can be destructured to access certain values
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

//Swapping variable values using a destructured array
let a = 8, b = 6;
[a,b] = [b,a];

//Using destructuring and ... to assign the first 2 values to variables and the rest to another array
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
