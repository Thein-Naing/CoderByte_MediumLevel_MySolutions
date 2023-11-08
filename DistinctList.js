/* medium
Distinct List
Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries.
For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.

Examples
Input: [0,-2,-2,5,5,5]
Output: 3
Input: [100,2,101,4]
Output: 0

Tags
array math fundamentals set theory sorting */ 

 /* Note: The arr.indexOf() method returns the index of the first occurrence the element that we want to find, or -1 if the element is not found.
          The filter() Array method creates a new array with elements that fall under a given criteria from an existing array. */

function DistinctList(arr) { 

  // code goes here  
  return arr.filter((num, index) => arr.indexOf(num) !== index).length;      /* 1. Use arr.filter() method(num and index as arguments) together with arr.indexOf() method and arr.length method.
}                                                                                  If arr.indexOf(0) ===  0  !== [0,-2,-2,5,5,5][0], then there will be duplicate entries.
                                                                                   Filter this element and find its length and return it. */
   
// keep this function call here 
console.log(DistinctList(readline()));


