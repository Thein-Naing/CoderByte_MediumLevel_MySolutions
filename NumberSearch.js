/* 
medium 
Number Search
Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. 
For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32.
Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2.
Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world).
Each string will also have at least one letter.

Examples
Input: "H3ello9-9"
Output: 4
Input: "One Number*1*"
Output: 0

Tags
searching math fundamentals  */

function NumberSearch(str) { 
   
      let sum = 0;                             // 1. Initial result of adding up all numbers shall be "zero".
      let letterCount = 0;                     // 2. Initially total amount of letters in the given string shall be "zero" 

                                               /* Given Statement: search for all the numbers in the string, add them together */
    
      for (let i = 0; i < str.length; i++) {   /* 3. Use For Loop to iterate through each every charaters of given str to determine the type of character.
        let char = str.charAt(i);                    initiate variable called char to define character of given str. */
  
          if (char.match(/[0-9]/)) {           /* 4. If character is a number, then update sum. Use str.match() method with number regex and calling parseInt method
          sum += parseInt(char);                     with variable char. */
        }

        if (char.match(/[a-zA-Z]/)) {          /* 5. If character is a letter, then update letterCount. Use str.match() method with words regex. */
          letterCount++;
        }
      }
                                              /* Given Statement: then return that final number divided by the total amount of letters in the string.
                                                                  then final answer should be rounded to the nearest whole number.   */
  
       return result = Math.round(sum / letterCount);   /* 6.  Return result as per given statement and use Math.round() method to get nearest whole number. */

      }
        
     /* Notes: The charAt() method returns the character at a specified index (position) in a string.The index of the first character is 0, the second 1, ...*/ 
              The forward slashes / / mark the start and end of the regular expression. 
              The parseInt method parses a value as a string and returns the first integer. */   
 
   
// keep this function call here 
console.log(NumberSearch(readline()));  // given "3Hello9 9 9" =====> 6.
// for VS code ===> console.log(NumberSearch("3Hello9 9 9"));  =====> 6
