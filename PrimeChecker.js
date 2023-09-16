/*Prime Checker

Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. 
For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. */

  // code goes here  
  // Note. If you can solve Prime Number and Prime Mover challenges, you can solve this challenge.

  /* 1. create isPrime helper function taking num as argument to check rearranged integers from given number are prime */

 const isPrime = (num) => {  
    if (num <= 1) return false;  // 1A. we have to check num <= 1 because if given number is 100 and one of rearranged integers will be 001.
   for (let i = 2; i < num; i++) { 
     if (num % i === 0) {  
        return false; 
     }
   }
   
   return true; /* 1A.if iterate over all(num) & num will be prime 
                      if it was not divisible by any number(i). */
  }

/* 2. take assumption we can rearrange 3 integers from given number.
      find integer1 of given number by rearranging given number. */

/* basically it's sorting the digits from smallest to biggest, 
   then turns it into a string by joining it and convert to integer by calling parseInt. */

 integer1 = parseInt(num.toString().split('').sort().join('')); 
 
/* console.log(integer1); 
3. if we log, we will get integer1 = 589  and 89 for input 598 and 98. */

/* 4. find integer2 of given number by assuming j is integer1.
      Meaning: loop will start from interger1 and end at integer 3.*/

 for (let j = integer1; j <= num * 3; j++) {        
   if (parseInt(j.toString().split('').sort().join('')) === integer1) {
        integer2 = j;

  /*  console.log(integer2); 
   5. if we log, we will get  integer2 = 589, 598,859  and 89 for input 598 and 98. 
      and now we can check integr2 is prime  */


        if(isPrime(integer2)) {
          return 1;        /* 5A.if iterate over all(integer2) & integer2 will be prime. 
                                 becuase it was not divisible by any number(j). 
                                 Meaning: 589/598 !== 0 || 859/598 !== 0  && 89/98 !== 0 */
      }    
    }
 }
 
 return 0;   //6. otherwise return false.

}

// keep this function call here 
console.log(PrimeChecker(readline()));
