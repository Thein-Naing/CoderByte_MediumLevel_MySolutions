/*Number Search

Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, 
then return that final number divided by the total amount of letters in the string. 
For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. 
Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. 
Only single digit numbers separated by spaces will be used throughout the whole string 
(So this won't ever be the case: hello44444 world). Each string will also have at least one letter. */



function NumberSearch(str) { 

// 1.define sum for total and letters for char counts and assign zero value for both initially.
  let sum = 0;
  let letters = 0;
  
  //2. loop through each character in the given string
  for (let i = 0; i < str.length; i++) {
     char = str.charAt(i);
    
    // 3.if the character is a number, convert it to integer and add it to the sum. 
    if (/^\d$/.test(char) && char !== " ") {   //3A. exclude spaces from the sum

      sum += parseInt(char);  //3B. sum = sum + parseInt(char)
    }
    
    // 4. if the character is a letter, increment the letters
    if (/[a-zA-Z]/.test(char)) {
      letters++;  //4A. letters + 1;
    }
  }
  
  // 5. dividing the sum  by the letters and round the result and return it.
 
return Math.round(sum / letters);
  

 }
   
// keep this function call here 
console.log(NumberSearch(readline()));
