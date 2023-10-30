/* Prime Time

Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, 
otherwise return the string false. The range will be between 1 and 2^16. */



function PrimeTime(num) { 

  // code goes here  

/* Note: 1. "1" is neither prime nor composite number."
         2. prime number not be is less than 1
         3. prime number must be positive value. */


for (let i = 2;  i < num; i++) {   /*4. so we will loop through starting from 2 and we will check if remainder === 0 then if it is divisible and it is not prime number */
    if (num % i === 0) {       
      return false;
      }
   }
      return true;                  // 5. Otherwise it is not divisible and it is prime number.
      
 
}
   
// keep this function call here 
console.log(PrimeTime(readline()));
