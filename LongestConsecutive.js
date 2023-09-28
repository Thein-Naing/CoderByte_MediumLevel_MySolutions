/*   Longest Consecutive
Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the longest consecutive subsequence (LCS).
An LCS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in a consecutive, increasing order. 
The sequence does not need to be contiguous and there can be several different subsequences. 
For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. 
For this input, your program should return 4 because that is the length of the longest consecutive subsequence.

Examples
Input: [6, 7, 3, 1, 100, 102, 6, 12]
Output: 2
Input: [5, 6, 1, 2, 8, 9, 7]
Output: 5

Tags
array sequences dynamic programming sorting Google Facebook Microsoft */

function LongestConsecutive(arr) { 

    // code goes here  
  
     arr = arr.sort((a, b) => a - b);       // 1. sort the given array in ASC order.
  
    let longest = 1                         // 1A. initial quantity of longest consecutive sequence(LCS) shall be "1".
    let count = 1                           // 2. initial count for LCS shall be "1".
    
    for (i = 0; i < arr.length - 1; i++) {
       if (arr[i + 1] === arr[i] ) {        // 3. duplicated number will not be counted. we have to specify this statement for passing all tests.
            }
     
      else if (arr[i+1] - arr[i] !== 1 )    // 4. if there is no consecutive, increasing order between two numbers, then count will be 1.

           count = 1;            

      else count += 1;                      // 5. otherwise there will be consecutive, increasing order between two numbers and update the count.
    
      if (count > longest)                  // 6. if count is larger than initial longest quantity, then longest quantity will be count quantity.
      longest = count            
    }
    return longest                          // 7. just return longest.
  }
     
  // keep this function call here 
  console.log(LongestConsecutive(readline()));
