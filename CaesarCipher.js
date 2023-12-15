/* medium
Caesar Cipher
Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. 
A Caesar Cipher works by shifting each letter in the string N places in the alphabet (in this case N will be num). 
Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
Examples
Input: "Hello" & num = 4
Output: Lipps
Input: "abc" & num = 0
Output: abc

Tags
string manipulationen coding hash table Microsoft */

function CaesarCipher(str,num) { 
  // code goes here  
  let result = "";                                // 1. Initiate final result as an empty str and declare lowercase or uppercase letters.
  let letters = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < str.length; i++) {          // 2. Use brute force approch and use For Loop.
    let ch = str.charAt(i);                       // 3. define current character of str.
    if (letters.includes(ch))                    // 4. For edge case (current character is lowercase letter and current character exists in lowercase alphabet).
      result += letters.charAt((letters.indexOf(ch) + num) % 26);
    else if (letters.includes(ch.toLowerCase()))    // 5. Otherwise convert current character to lowercase alphabet and then shift it by given shifting num in the alphabet, convert back to uppercase and update the result.
      result += letters.charAt((letters.indexOf(ch.toLowerCase()) + num) % 26).toUpperCase();
    else 
      result += ch;        // 6. Otherwise result shall be current character and update result.    
  }
  return result;           // 7. Just return result.
}
   
// keep this function call here 
console.log(CaesarCipher(readline()));
