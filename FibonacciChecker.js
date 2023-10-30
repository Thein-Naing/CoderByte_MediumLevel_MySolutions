/* Fibonacci Checker
Medium
Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. 
This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. 
The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

Examples
Input: 34
Output: yes
Input: 54
Output: no

Tags
math fundamentals sequences */

/*  Notes: The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, and 1. 
           A number is Fibonacci if and only if one or both of (5 * n * n + 4) or (5 * n * n – 4)  is a perfect square.  
           Meaning: for example: 3 ----> (5 * 3 * 3) + 4  become 49, then  Math.sqrt(49) ----> 7 and so 3 is Fibonacci.

  //  1. let Fibonacci1 = Math.sqrt((num * num * 5) + 4);
  //  2. let Fibonacci2 = Math.sqrt((num * num * 5) - 4);
  //  3. return ((Fibonacci1 % 1 === 0) || (Fibonacci2 % 1 === 0)) ? "yes" : "no";
  // 4. combine above 3 steps in one line and return. */

   return (((Math.sqrt((num * num * 5) + 4)) % 1 === 0) || ((Math.sqrt((num * num * 5) - 4)) % 1 === 0)) ? "yes" : "no";

}

// keep this function call here 
console.log(FibonacciChecker(readline()));
