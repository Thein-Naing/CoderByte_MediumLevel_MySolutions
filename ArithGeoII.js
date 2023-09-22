/* 
medium
Arith Geo II
Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic"
if the sequence follows an arithmetic pattern or return "Geometric"
if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. 
An arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

Examples
Input: [5,10,15]
Output: Arithmetic
Input: [2,4,16,24]
Output: -1
Tags
array math fundamentals sequences*/



function ArithGeoII(arr) { 
 
  // code goes here  
 
   /*  A. if the sequence follows an arithmetic return "Arithmetic",
          an arithmetic sequence is one where the difference between each of the numbers is consistent.
       B. if the sequence follows a geometric pattern return "Geometric",
          a geometric sequence, each term after the first is multiplied by some constant or common ratio.
       C. if the sequence doesn't follow either pattern return -1. */

 
 const isArithmetic = () => {                          // 1. create function for the sequence follows an arithmetic pattern                                                         
   for (let i = 1; i < arr.length - 1 ; i++) {         // 1A. use for loop to find difference of each every number is consistent.   
      if (arr[1] - arr[0] !== arr[i+1]- arr[i]) {      // 1B. assuming the difference between each of the numbers is inconsistent 
                                                       // 1C. e.g. [1,2,3,4,5,10,20], [1,2,3,4,5,6,7,88,2],[10,110,210,310,410,511],                                                      
        return false;                                  //     there may be these type of arrays.
                                                       // 1D. always return false condition first to make sure difference is consistent.                                
      }  
  }
  return true;                                         // 1D. then return true for isArithmetic function. */ 
 }

 const isGeometric = () => {                           // 2. create function for the sequence follows a geometric pattern 
   for (let j = 1; j < arr.length-1 ; j++) {           // 2A. the procedure is same as above steps 1A,1B and 1C. 
      if(arr[1] / arr[0] !== arr[j+1] / arr[j]) {
        return false;
    } 
  }  
  return true;
 }  

  if (isArithmetic(arr))  return 'Arithmetic';          // 3. if the sequence of given arr follows an arithmetic, then return "Arithmetic",           
  if (isGeometric(arr))   return 'Geometric';           // 3A. if the sequence follows a geometric pattern return "Geometric",
  return -1;                                            // 3B. if the sequence doesn't follow either pattern return -1.  */

}
          
// // keep this function call here 
console.log(ArithGeoII(readline()));
