  
function ArrayAddition(arr) {  
 
/* 1. extract the largest number from arr using arr.sort and arr.pop method and store as
largestNum variable. arr.sort() method always return a funtion with compare element to next
element. array pop() method removes the last element from an array and returns that element */

  let largestNum = arr.sort((a,b) => a - b).pop();

  //2. declare initial state for sum of all numbers except largestNum shall be "zero".
  let sum = 0;
    
  /* 3 . it will be nested array and the outer loop goes through every number in the array and 
  if i = 0, update the sum. */
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 

  /* 4. the inner loop adds all the other numbers in the array except largestNum and 
    then compares the sum of all numbers to the largest number. if it is equal;  
    then return true otherwise return false. */

  // 4A.for arr contains only positive numbers. loop will start from arr[1].
    for (let j = 1; j < arr.length; j++) {
      if (j != i) {        
        sum += arr[j];   // update the sum.

   //4B. then compare the sum to the largestNum 
         if (sum === largestNum) {
          return true;
        }
      }
    }
      
      /* 5. for arr contains positive numbers with negative numbers. 
      loop will start from arr[0] */

     for (let k = 0; k < arr.length; k++) {
      if (i != k) {
        sum -= arr[k];

     //6A. then compare the sum to the largestNum 
        if (sum === largestNum) {
          return true;
        }
      }
    }
    //7. if assuming arr is empty, then 
    sum = 0;
  }
    // 8. but the array will not be empty in given question. so return false.
  return false;  
         
}
  
console.log(ArrayAddition(readline()));
