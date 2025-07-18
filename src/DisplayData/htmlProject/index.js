//Array Methodds :Filter,Sort,MAP,Find,Reduce
// CALLBACK

// function printTimeStamp() {
//   let d = Date.now();
//   console.log("TS ");
//   console.log(d);
// }

// // Callback Function as an argument
// setInterval(printTimeStamp, 1000);

let array = ["green", "yellow", "blue", "red"];

function printColor(c, i) {
  console.log("The index is", index);
  console.log("Color is ", color);
  return `${color}+1`;
}

// MAP -> Go through an array
// Create A new Array->
let sol = array.map(printColor);

numbers = [2, 6, 7, 8, 10];

// singleElement,Index
// Create a new array wth the squaroot of the n
//[2,36,49]
let numbersSqt = numbers.map((n) => {
  return n * n;
})