/*  Bracket Matcher

Have the function BracketMatcher(str) take the str parameter being passed and return 1
if the brackets are correctly matched and each one is accounted for. Otherwise return 0. 
For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))"
the the output should be 0 because the brackets do not correctly match up.
Only "(" and ")" will be used as brackets. If str contains no brackets return 1.*/

function BracketMatcher(str) {
    
       let left = 0;                        //1. initial quantity of opening bracket shall be "zero"
       let right = 0;                       //2. initial quantity of closing bracket shall be "zero"

    for (let  i = 0; i < str.length; i++) { //3.Loop through each character in the input string
        if (str[i] === "(" ) {              /* 4.if the character is an opening bracket update left.increment the left quantity. */     
          left++; 

        } else if (str[i] === ")" ) {        /* 5. if the character is a closing bracket update right. increment the right quantity. */
          right++;
        }
         if (right > left) {                /* 6. if closing or opening bracket quantity is greater than > opening or closing bracket,
                                               brackets are not correctly match up and return "zero" . you can write if ( left > right ) also.*/
              return 0;
        }
    }
                                            /* 7. we have finished checking input string using for loop. we will continue to check given statement.
                                               you can use while loop or ternary operator for if else statement. both methods are correct.*/
    
     return  left === right ? 1 : 0;        /* 8. if quantity of left and right are same, then the brackets are correctly matched and return 1.
                                            /* 9. otherwise quantity of left and right are not the same.so return "zero". */*/                                                           
}
        
// keep this function call here 
console.log(BracketMatcher(readline()));
 
// while loop method for step 8 and 9.

//   while ( left === right) {              /* 8. if quantity of left and right are same, then the brackets are correctly matched and return 1. */
//              return 1; 
//       }                                  /* 9. otherwise quantity of left and right are not the same.so return "zero". */
//              return 0;
// }