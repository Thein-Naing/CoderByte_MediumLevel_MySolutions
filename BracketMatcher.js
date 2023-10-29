/*  Bracket Matcher

Have the function BracketMatcher(str) take the str parameter being passed and return 1
if the brackets are correctly matched and each one is accounted for. Otherwise return 0. 
For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))"
the the output should be 0 because the brackets do not correctly match up.
Only "(" and ")" will be used as brackets. If str contains no brackets return 1.*/

function BracketMatcher(str) {
    
       let open = 0;                        // 1. Initial quantity of opening bracket shall be "zero"
       let close = 0;                       // 2. Initial quantity of closing bracket shall be "zero"

    for (let  i = 0; i < str.length; i++) { // 3. Loop through each character in the given string
        if (str[i] === "(" ) {              /* 4.If the character is an opening bracket update open by incrementing the left quantity. */     
          open++; 

        } else if (str[i] === ")" ) {        /* 5. If the character is a closing bracket update close by incrementing the close quantity. */
          close++;
        }
         if (close > open) {                /* 6. If closing bracket quantity is greater than > opening bracket,
                                                  brackets are not correctly match up and return "zero". */
              return 0;
        }
    }
                                            /* 7. We have finished checking given string using for loop. we will continue to check given statement.
                                                  You can use while loop or ternary operator for if else statement. both methods are correct.*/
    
     return  open === close ? 1 : 0;        /* 8. If quantity of open and close are same, then the brackets are correctly matched and return 1.
                                                  Otherwise quantity are not the same.So return "zero". */                                                          
}
        
// keep this function call here 
console.log(BracketMatcher(readline()));
 
// while loop method for step 8 and 9.

//   while ( left === right) {              /* 8. if quantity of left and right are same, then the brackets are correctly matched and return 1. */
//              return 1; 
//       }                                  /* 9. otherwise quantity of open and close are not the same.so return "zero". */
//              return 0;
// }
