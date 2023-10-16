/* medium
Multiple Brackets
Have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for.
Otherwise return 0. 
For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, 
but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up.
Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.

Examples
Input: "(coder)[byte)]"
Output: 0
Input: "(c([od]er)) b(yt[e])"
Output: 1 5

Tags
searchingstack Node.js */

// Notes. If you have solved BracketMatcher medium level challenge, you can solve this challenge.

function MultipleBrackets(str) { 

  // code goes here  
  
  let  A = 0;                              // 1. initial quantity of opening curly bracket shall be "zero".
  let  B = 0;                              // 2. initial quantity of closing curly bracket shall be "zero".
  let  C = 0;                              // 3. initial quantity of opening square bracket shall be "zero".
  let  D = 0;                              // 4. initial quantity of closing square bracket shall be "zero".

 for(let i = 0; i < str.length; i++) {     // 5. Use For Loop to find each and every character in the given string to check which type of bracket.
   if(str[i] === "(") {                    // 6. If the character is an opening curly bracket, then update quantity of opening curly bracket.
      A += 1;
   } if(str[i] === ")") {                  // 7. If the character is an closing curly bracket, then update quantity of closing curly bracket.
     B += 1;
   } if(str[i] === "[") {                  // 8. If the character is an opening square bracket, then update quantity of opening square bracket.
     C += 1;
   } if(str[i] === "]") {                  // 9. If the character is an closing square bracket, then update quantity of closing square bracket.
     D += 1;
   } if (B > A || D > C ) {               // 10. If closing bracket quantities are greater than opening bracket quantities, brackets are not correctly match up and return "zero".
   return 0;
   }
}                                         /* 11. We have finished checking given string using For Loop. We will continue to check given statement.
                                                 you can use while loop or ternary operator for if else statements and both methods are fine. */
                                          /* 12.(i) if given str contains no brackets, then return 1.
                                                (ii) if the brackets are correctly matched and each one is accounted for and there are some pairs of brackets
                                                     then return  1 + " "( one white space between marks) + (opening curly bracket + opening square bracket) */
                                          // 13. Otherwise quantity of opening brackets and closing brackets are not the same. So return "zero". 
  
   return A === 0 && B === 0 && C === 0 && D === 0 ? 1 : A === B && C === D ? 1 + " " + (A + C) : 0; 
}
   
// keep this function call here 
console.log(MultipleBrackets(readline()));
