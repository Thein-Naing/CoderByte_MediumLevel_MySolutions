/* Swap II
medium
Have the function SwapII(str) take the str parameter and swap the case of each character.
Then, if a letter is between two numbers (without separation), switch the places of the two numbers. 
For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3.
Examples
Input: "Hello -5LOL6"
Output: hELLO -6lol5
Input: "2S 6 du5d4e"
Output: 2s 6 DU4D5E

Tags
string manipulation searching */

function SwapII(str) { 

  var letters = str.split(' ');
  var result = [];

  for (let i = 0; i < letters.length; i++) {   
    let word = '';
    for (let j = 0; j < letters[i].length; j++) {
      let ch = letters[i][j];
      if (ch >= 'a' && ch <= 'z')
        word += ch.toUpperCase();
      else if (ch >= 'A' && ch <= 'Z')
        word += ch.toLowerCase();
      else
        word += ch;
    }
    result.push(word.replace(/(\d)(\D+)(\d)/i, '$3$2$1'));
    }
  return result.join(' ');  
 }          

/* Alternate Solution from Coderbyte. Only one line.
  return str.replace(/[a-zA-Z]/gi, letter => letter === letter.toUpperCase()? letter.toLowerCase() : letter.toUpperCase()).replace(/(d+)([a-zA-Z]+)(d+)/gi, '$3$2$1');  */
}
// keep this function call here 
console.log(SwapII(readline()));

