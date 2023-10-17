/*  Run Length
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. 
This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. 
For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

Examples
Input: "aabbcde"
Output: 2a2b1c1d1e
Input: "wwwbbbw"
Output: 3w3b1w

Tags
string manipulation encoding recursion */

let str = "aabbcde";

function RunLength(str) {
  let count = 1;                                     // 1. initial state of count for repeated letter shall be "one" becaue e.g. "abc" === "1*a1*b1*c".
  let result = "";                                   // 2. assuming there are no repeating letters in given str.

  for (let i = 0; i < str.length; i++) {             // 3. Use For Loop to iterate through each every characters of given str to find repeated letters.
                                                     
    if (str[i] !== str[i + 1]) {                     // 4. If there is no repeated letters, then number of count will be same as initial state value as 1.       
      
      result += count + str[i];                      // 5. Update the result and result will be like "abc" === "1a1b1c".
      count = 1;                                     // 6. And update the count.
    } else {
      
      count += 1;                                    // 7. Otherwise there will be repeated letters and  update count.
    }
  }

  return result;                                     // 8. Return the result.
}

console.log(RunLength(str));

// keep this function call here
// console.log(LetterCountI(readline()));
