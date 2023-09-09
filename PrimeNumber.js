/* Prime Time

Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, 
otherwise return the string false. The range will be between 1 and 2^16. */



function PrimeTime(num) { 

  // code goes here  
 // 1. initial state of prime number shall be false.
let isPrime = false;

/* 2. take note 
2A."1 is neither prime nor composite number."
2B. prime number not be is less than 1
2C. prime number must be positive value.

//3. so we will start from num > 1  and loop through starting from 2. 
 and we will check if remainder === 0 then it is not prine number */

 if (num > 1) {  
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return  isPrime = false;
        }
    }

//4.  then return isPrime with ternary operator for other numbers.
 return  isPrime ? false : true;
         
  }
}
   
// keep this function call here 
console.log(PrimeTime(readline()));
