// 1.[12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()

let fix=[12.345, 67.890, 34.567];
let output=[];
for(i of fix){
i=i.toFixed(2);
output.push(Number(i));
}

console.log(output)

// 2. ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()

//parseInt convert any datatype to Number and it also removes the other datatypes.
let inn=['123abc', '456def', '789ghi'];
let out=[];
for(i of inn){
i=parseInt(i);
out.push(i);
}
console.log(out)

// 3. [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()
// Code:
let arr=[12, 34.56, 78, 90.12,-90];
for(i of arr){
console.log(`${i} is an integer ${Number.isInteger(i)}`);
}

// 4. ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()

let input=['abc', 123, 'def', 456];
for(i of input){
console.log(`${i} is NAN ${Number.isNaN(i)}`)
}

// 5. [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant
// digits using toPrecision()
let inn1=[123.456, 789.012, 345.678];
let ouput=[];
for(i of inn1){
i=i.toPrecision(4)
ouput.push(Number(i));
}
console.log(ouput)


// 6.generate random otp 5 digit num using math.random

function getRandomNumber(val){
return Math.floor(Math.random()*val);

}
console.log(getRandomNumber(99999))

