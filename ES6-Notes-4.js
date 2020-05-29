//Javascript uses modules to import and export code into another file
<script type="module" src="filename.js"></script> //This is html code to load a module

//Export can be used to identify script that will be made available to other files
export const add = (x, y) => { //Create and expost an add function
    return x + y;
  }

//This is another way to export
const add = (x, y) => {
    return x + y;
  }
export { add };

//Import loads a portion of a module
import { add } from './math_functions.js';//Loads the add function from the math_functions.js file in the same folder

//Import * as can be used to import everything
import * as myMathModule from './math_functions.js';
myMathModule.add(2,3);//Should return 2+3 = 5

//export default sets the default value to export if none is specified
export default function add(x, y) { //Exports the add function if none is specified
    return x + y;
  }

export default function(x, y) { //Exports an unnamed function if none is specified
    return x + y;
  }

//When we import the default function, we only need to provide a name, not define which function to import
import add from "./math_functions.js"; //add could be any  name