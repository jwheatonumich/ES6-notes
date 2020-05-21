//Using a backticks `` around text can include linebreaks and variables directly in the text
const person = {name: "Zodiac Hasbro",age: 56};
  
// ${} is used for variables. ! is used to break the line.
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

//ES6 has shorthand for defining an object where the attributes have the same name as function inputs
const getMousePosition = (x, y) => ({
    x: x, //Here we do it the slow way and define each attribute from an input
    y: y
  });

const getMousePosition = (x, y) => ({ x, y }); //This is the shortcut that createx x:x and y:y

//Example using the above shorthand
let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {cat,dog,bird} //{cat: "Miaow", dog: "Woof", bird: "Peet peet"}