// 1.Use Object.keys() and Object.values() to create a new object with only the keys and
// values that meet a certain condition.

let obj1 = { a: 1, b: 2, c: 3, d: 4 };
let output={};
for(i in obj1){
if(obj1[i]>2){
console.log(`${i}:${obj1[i]}`);
}
}

// 2:Use Object.assign() to merge two objects and create a new object with the combined
// properties.
const obj = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
Object.assign(obj,obj2);
console.log(obj);

// 3.Use Array.reduce() to sum up the values of an object's properties.
// Code:
const obj4= { a: 1, b: 2, c: 3, d: 4 };

let valarr=Object.values(obj);
let sum=valarr.reduce((total,a)=>total+a,0);
console.log(sum);

// 4. scenario explained for array of objects using hasownproperty.

let arr=[{name:"a",id:"133"},{name:"b",DOB:"sep 24"},{id:"667", role:"developer"}];
console.log("To check if array of objects has property name in them");
for(i of arr){
console.log(i.hasOwnProperty("name"));
}



