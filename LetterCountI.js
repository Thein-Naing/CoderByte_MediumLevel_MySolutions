/*Letter Count I
Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and 
it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. 
Words will be separated by spaces.

Examples
Input: "Hello apple pie"
Output: Hello
Input: "No words"
Output: -1 */


function LetterCountI(str) { 

let words = str.split(" ");  //1. convert to words by spliting str.
   let count = 0;   // 2A. assuming initial state of count shall be "zero".
   let result = -1; // 2B. assuming there are no words with repeating letters given by challange.

   for(let i=0; i < words.length; i++) {//3. loop through words with index i and pass the word with index i.
     let word= words[i];

     for( let j=0; j< word.length; j++) {//4. loop through word[i] with index j and pass the letter.
       let letter = word[j];

       for(let k=0; k < word.length; k++) {//5. loop through word[i] with index k and pass the  another letter.
      
       /* 6.letter being pased in work[k] is not literally the same as letter being pased 
       in work[j]  and so no words with repeating letters */
           if( k !== j && letter === word[k] && result === -1) {
              count += 1 // count = count+1; 

              if(count > 1) {
                 result = word;
              
           }
         }
       }
     }
   }
   return result;
}
// keep this function call here 
console.log(LetterCountI(readline()));
