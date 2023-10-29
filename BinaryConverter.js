/* Binary Converter
Have the function BinaryConverter(str) return the decimal form of the binary value. 
For example: if 101 is passed return 5, or if 1000 is passed return 8.

Examples
Input: "100101"
Output: 37
Input: "011"
Output: 3

Tags
math fundamentals */

/* Notes: Example- How to Convert 101 in Binary?
Step 1: Divide 101 by 2. Use the integer quotient obtained in this step as the dividend for the next step. Repeat the process until the quotient becomes 0.
Dividend	Remainder
101/2 = 50	1
50/2 = 25	0
25/2 = 12	1
12/2 = 6	0
6/2 = 3	0
3/2 = 1	1
1/2 = 0	1

Step 2: Write the remainder from bottom to top i.e. in the reverse chronological order. This will give the binary equivalent of 101.
Therefore, the binary equivalent of decimal number 101 is 1100101.
Parameters

The math.pow() function takes two parameters.

number − It is a number for which users want to calculate the power. In our case, it is fixed which is 2.

power − It is the power of the first parameter. We will pass different values using for loop to get different powers of 2. */


 function BinaryConverter(str) { 
       
           return parseInt(str, 2);               // 1. Typical equation for binary convertion.
}

console.log( BinaryConverter( readline()));

// Alternative Method:
function BinaryConverter(str) { 
        let sum = 0;   
        for( let i = str.length-1; i >= 0; i-- ) {
                if( str[i] === '1' ) {
                    sum += Math.pow( 2, (str.length - 1 ) - i );
                }
        }
        return sum;

  console.log( BinaryConverter( readline()));
