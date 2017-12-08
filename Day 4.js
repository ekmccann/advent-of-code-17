/*For example:

aa bb cc dd ee is valid.
aa bb cc dd aa is not valid - the word aa appears more than once.
aa bb cc dd aaa is valid - aa and aaa count as different words.

The system's full passphrase list is available as your puzzle input. How many passphrases are valid?*/

const _ = require('lodash');
const input = require('./day-4-input.js');

const simpleImput = `dd bb cc dd ee
aa bb cc dd
aa bb cc dda aaa`

//Process input 
const processInput = (roughInput)=>{
    return roughInput.split('\n').map((line)=>line.split(' '));
};

//See if a single array contains all unique strings
const hasDuplicates = (stringArray)=>{
  return _.uniq(stringArray).length == stringArray.length; 
};

//Run the uniqueness check on all arrays
const saveValidPasscodes = (stringArray)=>{
	return _.filter(_.map(stringArray, hasDuplicates));
};

//Count how many passcodes are valid
const countValidPasscodes = (trueArray)=>{
	return saveValidPasscodes(trueArray).length;
};

console.log(countValidPasscodes(processInput(input)));
