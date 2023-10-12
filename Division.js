/* medium 
Division
Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder.
For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.
Examples
Input: 7 & num2 = 3
Output: 1
Input: 36 & num2 = 54
Output: 18
Tags
math fundamentals algebra*/

// Notes. Same solution as GCF (Great Common Factor) solution in easy level challenge except for replacing arr with num1, num2.

function Division(num1,num2) { 

  // code goes here  
   let gcf = 1;                                   // 1. initial value of gcf number shall be 1.

   for (let i = 0; i <= num1; i++) {              // 2. use For Loop(for iterating each every integer of given numbers to get desired condition).
       if (num1 % i === 0  && num2 % i === 0) {   // 3. desired condtion === every given number must be divisible by i where value of i starting from 0.
         gcf = i;                                 // 4. if desired conditions are met, then gcf number will be equal to this interger i.
       }
   }
   return gcf;                                    // 5. return gcf.
}
   
// keep this function call here 
console.log(Division(readline()));
