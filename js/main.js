/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;


//Prompt user to input a number 

isInteger = false;

while(!isInteger) { 
    maxNumber = prompt('Enter a number greater than 0 (must be a whole number)',18);
    maxNumber = parseInt(maxNumber);
    if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
        isInteger = true;
    }
}


//Fizz, Buzz & Fizzbuzz logic

fbResults = [

];

 for (let i=1; i <= maxNumber; i++) {
     if (i % 15 == 0) {
         fbResults.push('FizzBuzz');
     } else if (i % 3 == 0) {
         fbResults.push('Fizz'); 
     } else if (i % 5 == 0) {
         fbResults.push('Buzz');
     } else {
         fbResults.push(i);
     }
    }


//Display Results

fbText = '';

for (let result of fbResults) {
    fbText = fbText + result + "\n";
}



///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;