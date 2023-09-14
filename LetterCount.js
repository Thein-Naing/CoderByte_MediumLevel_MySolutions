/* medium 
Letter Count
Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
If there are no words with repeating letters return -1. Words will be separated by spaces.
Examples
Input: "Hello apple pie"
Output: Hello
Input: "No words"
Output: -1

Tags
searchinghash table*/

/*Note. this is nested loop challenge. Same solution as easy level Letter Count challenge.  */

function LetterCount(str) { 

let words = str.split(" ");  //1. convert given str to words.
   let count = 0;   // 2A. initial state of count for repeated letter shall be "zero".
   let result = -1; // 2B. assuming there are no words with repeating letters (it is given statement from question).
 
   for(let i = 0; i < words.length; i++) {//3. loop through words with index i and extract the word with index i of words..
     let word = words[i];

     for( let j = 0; j < word.length; j++) {//4.loop through word with index j and pass the letter.
       let letter = word[j];

       for(let k = 0; k < word.length; k++) {//5.loop through word with index k and pass the another letter.
      
       /* 6A. letter being passed in work[k] is not literally the same as letter being passed in work[j]  
              and so there is no words with repeating letters */
         
           if( k !== j && letter === word[k] && result === -1) {
             
              count += 1;  // 7. then update the state of count by count = count+1 OR count += 1;  

              if(count > 1) { //8. if count > 1 ( meaning: there is word with repeating letter and we found the desired outcome)
                              
                result = word;    //9.so result will be the word which we found after looping with j or k and count > 1.
              
           }
         }
       }
     }
   }
   return result;   //10. return the result.
}
   
// keep this function call here 
console.log(LetterCount(readline()));
