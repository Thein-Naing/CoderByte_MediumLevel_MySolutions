/* Dash Insert II

Have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str.
For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. */


function DashInsertII(num) { 

  // code goes here  
 return num.toString().replace(/(d*[13579])(?=d*[13579])/g, "$1-").replace(/([2468])(?=[2468])/g, '$1*');

}
   
// keep this function call here 
console.log(DashInsertII(readline()));
