/*  medium 
String Calculate
Have the function StringCalculate(str) take the str parameter being passed and evaluate the mathematical expression within in. 
The double asterisks (**) represent exponentiation.

For example, if str were "(2+(3-1)*3)**3" the output should be 512. Another example: if str is "(2-0)(6/2)" the output should be 6. 
There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. 
The string will contain the operators: +, -, /, *, (, ), and **. If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. 
So divide then multiply, and for the second one multiply, divide, then add. 
The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding.
Examples
Input: "6*(4/2)+3*1"
Output: 15
Input: "100*2**4"
Output: 1600
Tags
math fundamentals string manipulation algebra */

function StringCalculate(str) { 
    
   // code goes here  
  return  eval(str);    // 1. Use eval(string) method which evaluates JavaScript code represented as a string and evaluates the what the string represents.

}
   
// keep this function call here 
console.log(StringCalculate(readline()));


