/* 
medium 
Triple Double
Have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and 
also a straight double of the same number in num2. 
For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and 
you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0.

Examples
Input: 465555 & num2 = 5579
Output: 1
Input: 67844 & num2 = 66237
Output: 0

Tags
searching  */

function TripleDouble(num1,num2) { 

  // code goes here  
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");
  let count = 0;

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === arr1[i+1] && arr1[i+1] === arr1[i+2]){
      count = arr1[i];
      break;
      }
    }
 
  for(let j = 0; j < arr2.length; j++){
    if(arr2[j] === arr2[j+1] && arr2[j] === count) {
      return 1;
      }
    }
    return 0;
}
// keep this function call here 
console.log(TripleDouble(readline()));
