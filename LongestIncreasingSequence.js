//. This is my naive solution but it is not formatted as coderbyte. below my code you can find the other solution from coderbyte.


/*Longest Increasing Sequence
Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and 
return the length of the longest increasing subsequence (LIS). 
A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, 
and are in increasing order. The sequence does not need to be contiguous or unique, 
and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] 
then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input,  
your program should return 3 because that is the length of the longest increasing subsequence. */

function LongestIncreasingSequence(arr) { 

  // code goes here  
  let longestLIS = 1;
  let initialLIS = 1; 

      for (let i = 0; i < arr.length; i++) {
     if ( arr[i-1] < arr[i]) {
       initialLIS++;
     } else {
       initialLIS;
     }
  longestLIS = Math.max(initialLIS, longestLIS)
   }
   return longestLIS;
}
   
// keep this function call here 
console.log(LongestIncreasingSequence(readline()));




// ### other solution: clean and clear code.(not mine)

function LongestIncreasingSequence(arr) { 
let possible =[];
let max = Math.max(...arr) +1;
let sorted = arr.slice().sort();
for(let i= 0; i< arr.length;i++){
    let lis = [];
    let start = arr[i];
    lis.push(start);
 for(let j = i+1;j < arr.length;j++){
     if(start < arr[j]){
         lis.push(arr[j]);
         start = arr[j];
     }
 }
     possible.push(lis);
 }
  return possible.sort((a,b) => b.length - a.length)[0].length;       
}
   
// keep this function call here 
LongestIncreasingSequence(readline());
