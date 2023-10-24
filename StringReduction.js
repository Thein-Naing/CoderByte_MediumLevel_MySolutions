/* String Reduction
Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. 
The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third.
For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. 
This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.
For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc").
The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", 
and the final string "ac" is reduced to "b" so the output should be 1.

Examples
Input: "abcabc"
Output: 2
Input: "cccc"
Output: 4

Tags
string manipulation recursion */

/* Given Statement: The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third.                   
                    1. So abc can be replaced with two different adjacent characters of a , b and c which are ab,ba,ac,ca,bc,cb. 
                       Meaning: ab,ba will be replaced with "c", ac, ca will be replaced with "b" and bc, cb will be replaced with "a".
                    
   Given Statement: This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.
                    2. We will use regex.test() method with while loop.
                      (i) The while loop loops through a block of code as long as a specified condition is true. 
                          Here the specified condition is  /(ab|ba|ac|ca|bc|cb)/g
                          
                      (ii) The regex.test(string) method is used to test for a match in a string. The method returns true if it finds a match; otherwise, it returns false.
                     So regex  === /(ab|ba|ac|ca|bc|cb)/g  and regex.test(string) === /(ab|ba|ac|ca|bc|cb)/g.test(str). Meaning: pattern "ab","ba", etc... matched with given string? etc.
                     
                      (iii) If /(ab|ba|ac|ca|bc|cb)/g.test(str) finds a match, then replace them with str.replace(/ab|ba/, "c").replace(/ca|ac/, "b").replace(/bc|cb/, "a") 
                            using str.replace() method and given reduction method.
                    3. Return the smallest number using str.length() method. */


function StringReduction(str) { 

  // code goes here  
    while (/(ab|ba|ac|ca|bc|cb)/g.test(str)) {
        str = str.replace(/ab|ba/, "c").replace(/ac|ca/, "b").replace(/bc|cb/, "a"); 
   }
   return str.length;
}
   
// keep this function call here 
console.log(StringReduction(readline()));
