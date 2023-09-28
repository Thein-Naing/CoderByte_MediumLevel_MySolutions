/* ThreeFive Multiples

Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. 
For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. 
The integer being passed will be between 1 and 100. 

Examples
Input: 6
Output: 8
Input: 1
Output: 0

Tags
searching math fundamentals  */


function ThreeFiveMultiples(num) {
    let sum = 0;                                       // 1. initial state of sum (sum of all intergers which can be divisible 3 or 5 for a given number)shall be "zero".

    for (let i = 1; i < num; i++) {                    // 2. loop through each every integer in given number and check it is divisible either 3 or 5.

        if (i % 3 === 0 || i % 5 === 0) {

            sum += i;                                  // 3. if it is divisible either 3 or 5, then update sum === addition of all intergers which can be divisible 3 or 5.
        }
    }
    return sum;                                        // 4. simply return sum.
}
    
// keep this function call here 
ThreeFiveMultiples(readline());
