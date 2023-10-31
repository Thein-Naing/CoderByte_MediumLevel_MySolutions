/* Palindromic Substring
Have the function PalindromicSubstring(str) take the str parameter being passed and find the longest palindromic substring, which means the longest substring which is read the same forwards as it is backwards. 
For example: if str is "abracecars" then your program should return the string racecar because it is the longest palindrome within the input string.
The input will only contain lowercase alphabetic characters. 
The longest palindromic substring will always be unique, but if there is none that is longer than 2 characters, return the string none.

Examples
Input: "hellosannasmith"
Output: sannas
Input: "abcdefgg"
Output: none

Tags
searching dynamic programming Google Microsoft */

/* Solution Notes:  1. It will be Nested Loop for each letter in the input string and palindromic substrings.
                    2. Looping through expanding to the left(for given str[i]) and right(for longest substring str[j]) while checking for even and odd length palindromic substrings. 
        	    3. Move to the next letter if a palindromic substring doesn’t exist.
                    4. By expanding one character to the left and right, compare them and if both of them are equal , there is a palindromic substring.
		    5. Add this palindrome to stack and continue to find another palindromic substring.
                    6. Sort the stack, check longest palindromic substring is greater than 2, then return it otherwise return 0. */

function PalindromicSubstring(str) { 

  // code goes here  
let  stack=[];
	for(let i = 0; i < str.length; i++) {
		for(let j = i+1; j < str.length;j++) {
			if(str.slice(i-1, j+1) === str.slice(i-1, j+1).split('').reverse().join('')) {
				stack.push(str.slice(i-1, j+1))
			}
		}
	}
	return stack.sort((a,b) => b.length - a.length)[0].length > 2 ? stack[0]:'none'
}
   
// keep this function call here 
console.log(PalindromicSubstring(readline()));
