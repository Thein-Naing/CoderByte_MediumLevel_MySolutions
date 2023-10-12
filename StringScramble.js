/* String Scramble

Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false.
For example: if str1 is "rkqodlw" and str2 is "world" the output should return true.
Punctuation and symbols will not be entered with the parameters.  */

function StringScramble(str1,str2) { 

  // code goes here  
for (let i = 0; i < str2.length; i++) {           // 1. loop through str2 using For Loop to check a portion of str1 characters exist. 
    
                                                  /* 2. Assume each character of str2 equal to a portion of str1 characters.
                                                        example: str1.indexOf(0) === str2.CharAt(0) or
                                                                 str1.indexOf(1) === str2.CharAt(2) or
                                                                 str1.indexOf(2) === str2.CharAt(1) or
                                                                 str1.indexOf(3) === str2.CharAt(4) or
                                                                 str1.indexOf(4) === str2.CharAt(3) e.t.c. */

    if (str1.indexOf(str2.charAt(i)) !== -1) {   // 3. if a portion of str1 characters were found in str2 characters.(indexOf functions is to return -1 when the character isn't found.)
     str1 = str1.replace(str2[i], "");           // 4. then str1 will be replaced with rearranged str2 characters using str.replace method..
    
    } else {                                     // 5. else, return false
       return false;
       }
    }
  
    return true;                                // 6. otherwise all characters of str2 exists in str1 and return true.   
}
  
// keep this function call here 
console.log(StringScramble(readline()));

