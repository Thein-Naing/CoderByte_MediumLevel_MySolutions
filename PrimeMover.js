/* Prime Mover
Have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
Examples
Input: 9
Output: 23
Input: 100
Output: 541
Tags
math fundamentals prime numbers */

function PrimeMover(num) { 

  // code goes here  

  /* notes . composite Number: a whole number that can be written as a product of two smaller numbers,
   for example, 24 = 3 × 8.
   prime Number (Non-Composite): a whole number that cannot be written as the product of 
   two smaller numbers, such as 7 or 23. */

/*1. initial count for position of prime number(num) shall be "zero".     
   initial value of prime number(n) shall be "2".
  take note we will not check for the numbers n <= 1 and minus values. */
  
 let count = 0; 
 let n = 2;  

/*2. define a helper function to check that the number is prime or not and pass prime number(n) as parameter */  
  
/*3.run for loop  until the Math.sqrt(n). non-prime number will definitely be less than or equal to sqrt(n).
  3A.inside this loop check another condition: if the n is divided 
  by the current number and the remainder is zero then return false. otherwise return true.  */

  const isPrime = (n) => {  
   for (let i = 2; i <= Math.sqrt(n); i++) { 
     if (n % i === 0) {
        return false;
     }
   }
   return true;
  }
  
/*  4.run while loop until the value of count is less than num. 
(meaning: we have to iterate over positions of the all prime numbers until we have not found the nth prime number position.)
e.g. [3,5,7,9,11,13,17,19,23] ===> 9th position of prime number is 23. (num = 9 , n = 23).

    4A.then check whether the n is a prime number or not by calling isPrime helper function.

    4B.if this condition is true then increment the value of count by 1.
  otherwise increment the value of n by 1.
*/
    while (count < num ) { // initially count = 0 and so count < num;
     if (isPrime(n)) {
      count++ // update count
     }
     n++; //otherwise update prime number
   }
   
  //5. (if count > num condition) otherwise update prime number and return it.
   return n - 1; // 
  }
  
// keep this function call here 
console.log(PrimeMover(readline()));
