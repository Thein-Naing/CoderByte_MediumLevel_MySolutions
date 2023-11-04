/* mediumSolutions Video Solution 
Max Subarray
Have the function MaxSubarray(arr) take the array of numbers stored in arr and determine the largest sum that can be formed by any contiguous subarray in the array.
For example, if arr is [-2, 5, -1, 7, -3] then your program should return 11 because the sum is formed by the subarray [5, -1, 7].
Adding any element before or after this subarray would make the sum smaller.

Examples
Input: [1, -2, 0, 3]
Output: 3
Input: [3, -1, -1, 4, 3, -1]
Output: 8

Tags
array dynamic programming Google video */


/* Dynamic programming has two methodologies: top-down & bottom-up and this is bottom-up method using Kandane’s algorithm  */
/* 1.The Kandane’s algorithm uses optimal substructures and overlapping sub-problems with bottom-up approach by tabulation. 
       Because it loop through the array once, the time complexity is O(n). */
/* 2. Using Kandane’s algorithm. 
   3. Initiate two variable, maxSum for largest sum, tempSum for sum of current subarray.
   4. Loop through the given arr and when reach ith step, it calculate the subarray with the largest sum ending at i. 
      Use Math.max() method which returns the largest value from the numbers provided.
      Those sums so called tempSum will be stored in tempSum. 
      Compare all tempSum with each and every tempSum(adding current number to tempSum) and store the maximum value.
      arr = [3, -1, -1, 4, 3, -1];
      console.log(currentSum); // 
      /* 3 = arr[i]  then tempSum === 3,          
      / -1 = arri[i] then tempSum === 3 - 1 = 2 
      / -1 = arri[i] then tempSum === 2 - 1 = 1
      /  4 = arri[i] then tempSum === 1 + 4 = 5
      /  3 = arri[i] then tempSum === 5 + 3 = 8
      / -1 = arri[i] then tempSum === 8 - 1 = 7      
   5. Then find maxSum for comparing all tempSums  with maxSum of all tempSum.
      console.log(maxSum);   //    
        1, 2, 3,, 5, 7, 8 
        8      */   
  
  function MaxSubarray(arr) {    
    let maxSum = -Infinity
    let tempSum = 0
  
    for (let i = 0; i < arr.length; i++) {      
        tempSum = Math.max(arr[i], (tempSum + arr[i]));               // console.log(tempSum); // 3,2,1,5,8,7      
        maxSum  Math.max(tempSum, maxSum);                            // console.log(maxSum);  // 1, 2, 3,, 5, 7, 8   ---> 8       
    }
        return maxSum;
}

console.log(MaxSubarray(arr));
// keep this function call here 
// console.log(MaxSubarray(readline()));
