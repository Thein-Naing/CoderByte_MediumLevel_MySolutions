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
     /* 1. Given Statement: divide num1 by num2, and return the result as a string with properly formatted commas:
           The parseInt method parses a value as a string and returns the first integer. Also parseInt function ignores float values and 
           if n1 /n2 = 3.6667 then parseInt(n1 /n2) would still return 3 and ignore .6667.
           The num.toLocaleString("en-US") method will return thousandths place comma at(every three digits) so called properly formatted commas.
           
           so strA = parseInt(num1 / num2).toLocaleString("en-US").
           
        2. Given Statement: and 4 significant digits after the decimal place.
           The toFixed() method converts a number to a string.
           The toFixed() method rounds the string to a specified number of decimal
           The arr.slice() method will return substring of desired index. Here case is 4 significant digits after the decimal place.
           
           so strB = ((num1 / num2) % 1).toFixed(4).toString().slice(1)                         
           
        3. Our solution shall be solution ==== whole digits with properly formatted commas + 4 decimal numbers. Meaning: strA + strB  
        
        4. Example: num1 = 123456789, num2 = 10000, then  console.log(parseInt(num1 / num2)) === 12345
                                                          console.log(parseInt(num1 / num2).toLocaleString("en-US")) === 12,345
                                                          console.log((num1 / num2) % 1) === 0.6789000000007945          
                                                          console.log( ((num1 / num2) % 1).toFixed(4).toString().slice(1));  === .6789      */
   
              
           return (parseInt(num1/num2)).toLocaleString("en-US") + ((num1 / num2) % 1).toFixed(4).toString().slice(1);
        
    }

     // 5. console.log(FormattedDivision(123456789, 10000)); // 12,345.6789
 
// keep this function call here 
console.log(FormattedDivision(readline()));
