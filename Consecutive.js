/* Consecutive

Have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers 
needed to make the contents of arr consecutive from the lowest number to the highest number. For example: 
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) 
to make it a consecutive array of numbers from 4 to 8.
Negative numbers may be entered as parameters and no array will have less than 2 elements.*/

function Consecutive(arr) {

  // code goes here  

  // 1. initial state of count shall be "zero".  
  
     let count = 0;

 // 2.use arr.sort method to arrange elements in ascending order.
  let sortedArr = arr.sort((a, b) => a - b);

  // 3. then define first and last integers of sorted array.
  
   first = sortedArr[0];
   last = sortedArr[sortedArr.length - 1];  /*3A. meaning: e.g [1,2,3,4,5]  last = 5 === [1,2,3,4,5][5-1] = [1,2,3,4,5][4] ===  5 */

/* 4. we have to check each possible sequence of integers 
from the start to last using for loop. */
  
for (let i = first; i <= last; i++) {
  
/* 5. then using if statement,
we declare "i" is not in sequence of intergers in sorted array using arr.includes() method.
(meaning: we loop through each integers and 
remove existing intergers from start to last integer of sorted array
 and only leave with uncounted intergers to count) */
  
if (!sortedArr.includes(i))  
  
//6. now we can update the state of count by counting uncounted intergers.
  
    count += 1; // 6A.  count++
  }
 return count; // 7. return count
}
// keep this function call here 
console.log(Consecutive(readline()));
