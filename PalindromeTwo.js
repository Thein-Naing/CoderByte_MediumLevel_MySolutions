/* Palindrome Two

 (Note.If you can solve easy level: Palindrome challenge and Snake Case challenge, you can solve this challenge.)
 
Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the string false. 
The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. 
For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. */


function PalindromeTwo(str) { 

  // code goes here  
 
/* 1. convert  str to lowerCase words 
  2. then use arr.replace method together with regex.
  3.  /\W/g === Any non-word character in regex with global flag g 
  ( non-word character === white space, -, e.t.c).
  4. will be replaced with nothing ""  and assign to str1.
  5. then split the str1 and use str.reverse method  and join back and assign to str2.
  6. if str1 === str2 ? true , otherwise false. */
  
  str1 = str.toLowerCase().replace(/\W/g, "");
  str2 = str1.split("").reverse().join("");

  return str1 === str2;
 
}
   
// keep this function call here 
console.log(PalindromeTwo(readline()));
