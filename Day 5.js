const input = require('./day-5-input.js');

//Process the input into a single array
const processInput = (input)=>{
    return input.split('\n').map((item)=>Number(item));
};

//Given a number, move that many numbers up or down in the array
const jumpSpaces = (numberArray, countMoves=0, index=0)=>{
	while (index < numberArray.length){
		let oldIndex = index;
		index = index + numberArray[index];
		numberArray[oldIndex] += 1;
		countMoves += 1;
	};
	return countMoves;
};
