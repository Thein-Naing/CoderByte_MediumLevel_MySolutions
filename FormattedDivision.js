/* Formatted Division
Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, 
and return the result as a string with properly formatted commas and 
4 significant digits after the decimal place.
For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". 
The output must contain a number in the one's place even if it is a zero.

Examples
Input: 2 & num2 = 3
Output: 0.6667
Input: 10 & num2 = 10
Output: 1.0000

Tags
math fundamentals string manipulation */

function FormattedDivision(num1,num2) { 

  // code goes here  

     /* Notes:  The toFixed() method converts a number to a string.
                The toFixed() method rounds the string to a specified number of decimals.
                num.toLocaleString("en-US") method will return thousandths place comma at(every three digits) 
                arr.slice() method will return substring of desired index. Here case is decimal index.
                parseInt method parses a value as a string and returns the first integer. */
  
      return (parseInt(num1/num2)).toLocaleString("en-US") + ((num1 / num2) % 1).toFixed(4).toString().slice(1);
      
    }

 
// keep this function call here 
console.log(FormattedDivision(readline()));
