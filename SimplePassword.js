/* medium
Simple Password
Have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark or mathematical symbol.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.

If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false.
For example: if str is "apple!M7" then your program should return "true".

Examples
Input: "passWord123!!!!"
Output: false
Input: "turkey90AAA="
Output: true

Tags
string manipulation searching hash table back-end Node.js /

// Note: if you have solved Codeland Username Validation easy level challenge, you can solve this challenge.


  /* Given Statement:
     1. It must have a capital letter. 
        so str = str.match(/[a-zA-Z]/g).
     2. It must contain at least one number.
        so str = str.match(/[0-9]/g).
     3. It must contain a punctuation mark or mathematical symbol.
        so str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").
     4. It cannot have the word "password" in the string.
        so str = !str.includes("password"). we need to convert str to lowercase using str.toLowerCase() method.
     5. It must be longer than 7 characters and shorter than 31 characters.
        so str = str.length > 7 && str.length < 31
    */
function SimplePassword(str) { 

       // code goes here  
              str = str.toLowerCase(); 
              if ((str.length > 7 && str.length < 31) && (str.match(/[a-zA-Z0-9]/g)) &&       
              !str.includes("password") && str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")) {       
              return true;    
           } else {
             return false;
      } 
}

// keep this function call here 
console.log(SimplePassword(readline()));
