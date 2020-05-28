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

//A constructor function can be used to create multiple similar objects
//Constructor that creates objects based on 4 inputs
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
//Uses the constructor funnction with the "new" keyword to create objects for 2 people
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

//ES6 uses "Class" to create constructor functions more easily
class Person {
  constructer (first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
}

//get and set can be used to define how to output or modify data in variables in an object
class Book { //Fnction can be used to enter an author
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() { //Defines how to get data out of the object
    return this._author;
  }
  // setter
  set writer(updatedAuthor) { //Defines how to modify value of variable in the function
    this._author = updatedAuthor;
  }
}