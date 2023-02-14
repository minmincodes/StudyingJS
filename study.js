function nineSquared () {
    return 9*9;
}

console.log(nineSquared()); // this returns 81

function tenSquared () {
    return 10*10;
}

console.log(tenSquared()); // this returns 100

// so on and so on, it gets redundant and repitive

// if we want to find square of a different number, we would have to write another function
// instead we can write a generalized version of the code that takes in multiple numbers
// "Less is More"

function squaredNum (num) {
    return num*num;
}

console.log(squaredNum(7)); // this returns any number put in the (parameters) of squaredNum

// this is a useful concept to GENERALIZE our functions 
// we can reuse functions with different inputs/parameters, making our code more efficient


 
function copyArrayAndMultiplyBy2 (array) {
    // we want to store our output somewhere in the function
    // therefore we create a let variable to hold it
    let output = [];
    // using this for loop, we will take the array parameter values and iterate
    // everytime the loop iterates, it takes i which is the index of the array
    // the index starts at 0 then 1 then 2 etc
    // then the loop checks if the array index is less than its length
    // length meaning, how long is the value, our example is 3 long
    // after knowing it is less than our length, ex. 0 < 3
    // therefore, we go into the for loop and execute the code
    for (let i = 0; i < array.length; i++) {
        // the code wants to push to the output variable, value of (array[iterated]) multiply by 2
        output.push(array[i] * 2);
        // the answer is then pushed into the output variable
    }
    // then we return the output variable with all its new values at the end of the function
    // which is literally output with the return 
    return output;
}

// create a const array variable containing some arrays
const myArray = [1,2,3]
// create a variable to hold results of the function(chosen array samples)
let result = copyArrayAndMultiplyBy2(myArray);

console.log(result) // logs the myArray values and multiplies by 2, result = 2,4,6

// same array but divide

function copyArrayAndDivideBy2 (array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] /2);
    }
    return output;
}

// we can reuse the variable myArray above
// create new variable to add new value to

let resultTwo = (copyArrayAndDivideBy2(myArray));
console.log(resultTwo);


// same array but add by 3

function copyArrayAndAdd3 (array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] + 3);
    }
    return output;
}

// use same myArray variable and add it into our result variable
// add new variable for third result

let resultThree = (copyArrayAndAdd3(myArray));

// finally we print the entire result at the end
console.log(resultThree);

// As we can see, this is too much code for something that has almost the same functions/purpose

// now lets generalize the code
// we generalize a code that takes an array and set of instructions
function copyArrayAndManipulate(array, intstructions) {
    let output = [];
    // same exact output variable to hold output
    // same for loop
    for (let i = 0; i < array.length; i++) {
        // this time we have the array[i] inside instructions and that is the instructions
        // which will take the array input, increment it, then give it the instructions to do
        // then outputs it 
        output.push(intstructions(array[i]));
    }
    return output
}

// we creating an instruction to give to the function, which we can just pull back from memory
// anytime we need, this instruction multiplies by 2
function multiplyBy2 (input) {
    return input * 2;
}

// we create a result variable to store our data, we use the function arrayandmanipulate
// we take a set of array, we will use myArray from way earlier, showing we can still pull variable from way above
// then we put the instructions, in this case will be multiply by 2
let resultFour = copyArrayAndManipulate(myArray, multiplyBy2);

console.log(resultFour); // this logs array [1,2,3] -> [2,4,6]

// now we can just create more instructions and have them use the same manipulate function

function multiplyBy5 (input) {
    return input * 5;
}

let resultFive = copyArrayAndManipulate(myArray, multiplyBy5);

console.log(resultFive); // logs [5, 10, 15]

// as we can see, we did not have to write the same for loop function over and over 
// but instead with the array + instruction function, which is more efficient for code reusability

// functions specifically in javascript = first class objects

// they coexist and are like any other javascript objects

// 1. can store variables and properties of other objects, known as methods
// 2. passed as arguments into other functions
// 3. can return output/values from functions

// functions have the ability to be invoked, or to be called upon or run
// from obj = {} -> obj()

// higher order function is the main or outter function that takes in a function
// which is the copyArrayAndManipulate

// callback function is the function we pass into the higher order function
// which is the most recent example is multiplyBy5

// this allows us to run asychronous code!!!

// last example

const teslaArray = [3, 6, 9];

function myFunct(cbFunct)  {
    const output = [];
    for (let i = 0; i < teslaArray.length; i++) {
        const newValue = cbFunct(teslaArray[i]);
        output.push(newValue);
    }
    return output
}

// callback functions
function addBy10 (num) {
    return num + 10;
}

function multiplyBy20 (num) {
    return num * 20;
}

function stringify(num) {
    return num.toString();
}

// call myFunct function with each callback function

let resultSix = myFunct(addBy10);
let resultSeven =  myFunct(multiplyBy20);
let resultEigth = myFunct(stringify);

//console.log(resultSix)
//console.log(resultSeven)
//console.log(resultEigth)

let multipleVar = [resultSix, resultSeven, resultEigth];

function printAll (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

let final = printAll(multipleVar);
console.log(final);

// wow trying to make them all into one variable and printing them as separate arrays
// and have them print from one call was confusing for a second, easiest answers are hardest to find I guess
