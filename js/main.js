/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;

while (!isInteger) {
    let input = maxNumber;
    if (input === null) break;
    if (input.indexOf('.') < 0) {
        maxNumber = Number.parseInt(input);
        isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
    } else {
        window.alert('Please enter an whole number (no decimals)!');
    }
}

fbResults = [];

// Option 1
// if the number (i) divided by 3 & 5 with no remainder, push the string 'FizzBuzz' to the index
// if the number (i) divided by 3 has no remainder, push the string 'fizz' to the index
// Otherwise, if the number (i) divided by 5 has no remainder, push the string ‘buzz’ to the corresponding index position in the array.
// Finally, if none of these conditions are true, just push the number (i) to the array
for (let i = 0; fbResults.length < 100; i++) {
    let outputString = '';

    if (i % 3 === 0 && i % 5 === 0) {
        outputString += 'FizzBuzz'
    } else if (i % 3 === 0) {
        outputString += 'Fizz'
    } else if (i % 5 === 0) {
        outputString += 'Buzz'
    } else {
        outputString = i;
    }
    fbResults.push(outputString);
}

// Option 2
// for (let i = 0; i < 100;) {
//     let outputString = '';
//     if (i % 3 === 0) {
//         outputString += "fizz"
//     }
//     if (i % 5 === 0) {
//         outputString += "buzz";
//     }
//     if (outputString.length === 0) {
//         outputString = i;
//     }
//     fbResults.push(outputString);
// }


fbText = '';

for (let value of fbResults) {
    fbText += value + '\n';
}

let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;