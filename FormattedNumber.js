/* Formatted Number
Have the function FormattedNumber(strArr) take the strArr parameter being passed, which will only contain a single element, 
and return the string true if it is a valid number that contains only digits with properly placed decimals and commas, otherwise return the string false. 
For example: if strArr is ["1,093,222.04"] then your program should return the string true, but if the input were ["1,093,22.04"] then your program should return the string false. 
The input may contain characters other than digits.

Examples
Input: ["0.232567"]
Output: true
Input: ["2,567.00.2"]
Output: false

Tags
string manipulation searching back-end */

function FormattedNumber(strArr) { 
    // code goes here  

    // 1. Create regex to test given strArr is match up with required format(Given Statement: it is a valid number that contains only digits with properly placed decimals and commas)
    // 2. If it is matched then return true, otherwise return false.
    // 3. console.log(["0.232567"][0]);                                         // ["0.232567"][0] = 0.235567;
    // 4. console.log(["2,567.00.2"][0]);                                       // ["2,567.00.2"][0] = 2,567.00.2;
    // 5. console.log(strArr[0].match(/\d{3}(,\d{3})*(\.\d+)?/)[0])             // 0.232567 ===  0.235567 (matched)
    // 6. console.log(strArr[0].match(/\d{3}(,\d{3})*(\.\d+)?/)[0])             // 2,567.00 !== 2,567.00.2; (not matched)

 return strArr[0] === strArr[0].match(/\d{1,3}(,\d{3})*(\.\d+)?/)[0]? true : false;
  }
// keep this function call here 
console.log(FormattedNumber(readline()));

