/* medium 
Triple Double
Have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and 
also a straight double of the same number in num2. 
For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and 
you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0.

Examples
Input: 465555 & num2 = 5579
Output: 1
Input: 67844 & num2 = 66237
Output: 0

Tags
searching  */

/*   1. Given Statement:  Return 1 if there is a straight triple of a number at any place in num1 and 
                          also a straight double of the same number in num2. If this isn't the case, return 0.
                Meaning:  if a straight triple of a number at any place in num1 ----> str1[i-1] = str1[i] = str1[i+1] and 
                          also a straight double of the same number in num2     ---->   str1[i] = str2[j] = str2[j+1] 
                          then return 1. otherwise return 0. 
      2. Convert given num1 and num2 to str using arr.toString() methodand divide the string into an ordered list of characters using str.split("") method. 
      3. let 451999277, 41177722899 shall be num1 and num2 for testing purpose. 
      4. We have to use nested For Loop to check each every characters of given num1 is a straight triple of a number at any place in arr1 and 
         also a straight double of the same number in arr2.
      5. If this is the case, return 1 , otherwise return 0. */                  
                          

  function TripleDouble(num1, num2) {
  // code goes here
  let arr1 = num1.toString().split("");     // console.log(arr1) ----> ['4', '5', '1', '9', '9', '9', '2', '7', '7']
  let arr2 = num2.toString().split("");     // console.log(arr2) ----> ['4', '1', '1', '7', '7', '7', '2', '2', '8', '9', '9']

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1] && arr1[i + 1] === arr1[i -1]) {       // arr1[4] = arr1[5] && arr1[5] = arr1[3]
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] === arr2[j + 1] && arr2[j] === arr1[i]) {          // arr2[9] = arr2[10] && arr2[9] = arr1[3]
          return 1;
        }
      }
    }
  }
  return 0;
}

// console.log(TripleDouble(451999277, 41177722899)); ----> 1.

// keep this function call here 
console.log(TripleDouble(readline()));
