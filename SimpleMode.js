/*  Simple Mode

Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). 
For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. 
If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first).
If there is no mode return -1. The array will not be empt   */

function SimpleMode(arr) { 

let mode = 0;                                  //1. initial state of mode shall be "zero".
let maxOccurence = 0;                          // 2. initial state of maximum occurences of each element in array shall be "zero".

for(let i = 0; i < arr.length; i++) {          // 3. loop through the array to find out which element appears how many times in array.

    let occurence = 0;                         // 4 . initial state of occurence in each element shall be zero.
                                               // 5. note. console.log(occurence).
    for(let j = 0; j < arr.length; j++) {
        if( j !== i && arr[i] === arr[j]) {    /* 6. assuming  j!== i and arr[i] of outer loop was same as as arr[j] in inner loop */
            occurence++;                       /* 7. meaning : there will be a mode as element of arr[i] from outer loop appears element of arr[j] 
                                                     in inner loop. so we update the occurence, occurence += 1.  // note. console.log(occurence). */      
        }

        if( occurence > maxOccurence) {        // 8. if occurence of arr[i] is greater than the initial state of maximum occurence( maxOccurence = 0).
                                                              
            mode = arr[i]; 
            maxOccurence = occurence;          /* 9.  then occurence of arr[i] will be maximum occurence. so element of arr[i] will be mode and 
                                                       assuming not only arr[i] is appered first in outer loop 
                                                       but also there is more than one mode and other mode which has same maximum occurence as arr[i] . */
                                               /* 10.  then as given statement in challenge, if there is more than one mode, 
                                                       return the one that appeared in the array first.so we return arr[i] as mode.*/
      }
   }

}
    
if( maxOccurence === 0) {                      // 11. if there is no multiple occurences of element, means there is no mode and return -1.
    return -1;
    }

return mode;                                   // 12. otherwise return mode.
}
  
// keep this function call here 
console.log(SimpleMode(readline()));
