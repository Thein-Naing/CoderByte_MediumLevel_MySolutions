/* Number Encoding
Have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. 
Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should return 1653 1#!.

Examples
Input: "hello 45"
Output: 85121215 45
Input: "jaj-a"
Output: 10110-1

Tags
string manipulation encoding back-end */

/*//Note the charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// the majority of characters will take no more bytes in UTF-16 than they do in UTF-8, 

//In the 7-bit ASCII character set, ASCII code 96 is represented by the character ` also known as the grave accent
//// the char code for lowercase a is 97,
          // so get 1-indexed alphabet position by subtracting 96*/



function NumberEncoding(str) { 

  // code goes here  

  let stack =[];                              // 1. Define an empty array to store encoded letters from given str.
  for (let i = 0; i < str.length; i++) {      // 2. Use For Loop to loop through each every character to check if it is a letter or symbol or white space.
    if (!/[a-z]/.test(str[i])) {              /* 3. Use regex.test() method to verify character of given str[i] is a letter. 
                                                     Meaning: !/[a-z]/.test(str[i])  ===  there is no letter found in given str[i] .*/ 
        stack.push(str[i]);                   // 4.If it is not a letter, it may be symbol or white space and add to stack.  
        } else {
        stack.push(str.charCodeAt(i) - 96);   /* 5. If it is a letter, then use charCodeAt() method to convert letter to its char code.
                                                             Note: The charCodeAt() method returns the numeric Unicode value of the character at the given index.
                                                    The char code for lowercase a is 97 and so to get 1-indexed alphabet position for str[i], substract 96 from 97(str.charCodeAt(i)) */
        }
    }
      return stack.join("");                  // 6. Rejoin and return stack.
}                
   
// keep this function call here 
console.log(NumberEncoding(readline()));
