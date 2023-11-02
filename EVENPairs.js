/* Coderbyte
medium 
Even Pairs
Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. 
If a pair exists, return the string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers 
at the end of the string, "46" so your program should return the string true. 
Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.

Examples
Input: "3gy41d216"
Output: true
Input: "f09r27i8e67"
Output: false

Tags
searching */

/* Solution Note:             1. d+ regular expression is a pattern that matches one or more of the character "d" followed by any number of characters.
                                 The "d" character is a literal character that matches itself, and the "+" symbol indicates that the previous character 
                                 should be matched one or more times.
                              2. Meaning:  Hey regex! find if each and every following number is sequence of 2, 4, 6, 8 for current number sequences of 0,1,2,3,4,5,6,7,8,9.
                                           if you found it then return true otherwise return false. This method passes all caes and runtime is also O(n).  */

function EvenPairs(str) { 

    // code goes here  
    
      return str.match(/[0-9]\d*[2468]/g) ? true : false;
   
    }
    // keep this function call here 
    console.log(EvenPairs(readline()));
