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


function MultipleBrackets(str) { 

  // code goes here  
  let  A = 0;
  let  B = 0;
  let  C = 0;
  let  D = 0;

 for(let i = 0; i < str.length; i++) {
   if(str[i] === "(") {
      A += 1;
   } if(str[i] === ")") {
     B += 1;
   } if(str[i] === "[") {
     C += 1;
   } if(str[i] === "]") {
     D += 1;
   } if (B > A || D > C ) {
   return 0;
   }
}

   return A === 0 && B === 0 && C === 0 && D === 0 ? 1 : A === B && C === D ? 1 + "" + (A + C) : 0;
}
   
// keep this function call here 
console.log(MultipleBrackets(readline()));
