/* Trapping Water
medium 
Have the function TrappingWater(arr) take the array of non-negative integers stored in arr, and determine the largest amount of water that can be trapped. 
The numbers in the array represent the height of a building (where the width of each building is 1) and if you imagine it raining, water will be trapped between the two tallest buildings.
For example: if arr is [3, 0, 0, 2, 0, 4] then this array of building heights looks like the following picture if we draw it out:
Now if you imagine it rains and water gets trapped in this picture, then it'll look like the following (the x's represent water):
This is the most water that can be trapped in this picture, and if you calculate the area you get 10, so your program should return 10.
Examples
Input: new int[] {1, 2, 1, 2}
Output: 1
Input: new int[] {0, 2, 4, 0, 2, 1, 2, 6}
Output: 11

Tags
array stack Google Amazon Microsoft */


function TrappingWater(arr) { 

  // code goes here  
        let max = 0;         
        let sum = 0;

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < max) {
         sum += max - arr[i];
      } else {
         max = arr[i];
      }
    }
    return sum;
}
   
// keep this function call here 
console.log(TrappingWater(readline()));
