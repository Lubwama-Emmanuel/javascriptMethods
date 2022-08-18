// //// ARRAYS //////

// REVERSING A STRING 
// 
function reversedArray(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
    console.log(reversed);
  }
  return reversed;
}
console.log(reversedArray("emmanuel"));

// function reversedString(string) {
//     // SPLIT THE ARRAY
//   const arrayString = string.split("");
  
//     // REVERSE THE ARRAY
//   const reversedArray = arrayString.reverse();
  
//     // JOIN THE REVERSED ARRAY
//   const joinArray = reversedArray.join("");
  
//   return joinArray
// }
// console.log(reversedString("emmanuel"));
