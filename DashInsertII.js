/* Dash Insert II

Have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str.
For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. */

// Notes: if you have solved DashInsert easy level challenge, you can solve this challenge.

  /*1. Convert num to str using num.toString() method .create and use two regex to check odd  and even numbers [1,3,5,7,9] & [2,4,6,8] of given num
  are match with following 1,3,5,7,9 & 2,4,6,8 numbers in given num.*/ 

  /*2.   / / === start and end of regex.
      [13579]  === digits [13579] any character of: '1', '3', '5', '7', '9',
   [2468]  === digits [13579] any character of: '2', '4', '6', '8',   
  (?=  === look ahead to see if there is a match for 
   [13579] === digits [13579] any character of: '1', '3', '5', '7', '9 in following number,
   [2468] === digits [2468] any character of: '2', '4', '6', '8', in following number
  ) === end of look-ahead   
   g ==== global search flag     */

    /* 3. if match we found there are 2 odd numbers together and  2 even numbers together and so 
          we will add "-" and "*" sign between this 2 odd numbers and 2 even numbers by using $1 sign.
    
    3A. $1 === $1 is a first captured group.
        this value used in replacement patterns. 
        $1 is substitution and specifically used in numbered group substitutions. */

    /*  4. MEANING : Hey regex! find if each and every following number is 1,3,5,7,9 for current number 1,3,5,7,9 and 2,4,6,8 for current number 2,4,6,8,
            if you found it then add "-" and "*" between this 2 odd numbers and 2 even numbers using $1 sign.
     
     5. use str.replace method and return it.     */


function DashInsertII(num) { 

  // code goes here  
 return num.toString().replace(/([13579])(?=[13579])/g, "$1-").replace(/([2468])(?=[2468])/g, '$1*');

}
   
// keep this function call here 
console.log(DashInsertII(readline()));
