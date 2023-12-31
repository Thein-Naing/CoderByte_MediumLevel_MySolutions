/* medium
Word Split
Have the function WordSplit(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters, 
and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. 
For example: strArr can be: ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"].
Your goal is to determine if the first element in the input can be split into two words, where both words exist in the dictionary that is provided in the second input.
In this example, the first element can be split into two words: hello and cat because both of those words are in the dictionary.
Your program should return the two words that exist in the dictionary separated by a comma. 
So for the example above, your program should return hello,cat.
There will only be one correct way to split the first element of characters into two words. 
If there is no way to split string into two words that exist in the dictionary, return the string not possible. 
The first element itself will never exist in the dictionary as a real word.

Examples
Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
Output: base,ball
Input: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]
Output: abcg,efd

Tags
array dynamic programming searching hash table Google Microsoft Flutter   */


function WordSplit(strArr) { 

  // code goes here  

    for(let i = 0; i < strArr[0].length; i++){                                            // 1. Loop through first element of arr strArr[0] = a sequence of characters to split into two words.
         word1= strArr[0].slice(0, i);                                                    // 2. Use arr.slice() method and arr.substring() method to define two words.
         word2 = strArr[0].substring(i);
        // if (strArr[1].includes(word1) && strArr[1].includes(word2)) {                  // This method also work fine and pass all test cases.
      
        if (strArr[1].indexOf(word1) !== -1  && strArr[1].indexOf(word2) !== -1) {        /* 3.  Use arr.indexOf() method to find words in dictionary. You can use arr.includes() method also.
                                                                                                 If words are found in dictionary (strArr[1] = a long string of comma-separated words, in alphabetical order) 
                                                                                                 then return  words with string concatenation method.
                                                                                                  strArr[1].indexOf(word1) !== -1 meaning:  word1 is found in strArr[1]. 
                                                                                                  strArr[1].indexOf(word2) !== -1 meaning:  word2 is found in strArr[1]. */
                return word1  + "," + word2;                                              // 4. Return words as per given statement.
      }
    }
 return 'not possible'                                                                    // 5. Otherwise return "not possible".
}
   
// keep this function call here 
console.log(WordSplit(readline()));
