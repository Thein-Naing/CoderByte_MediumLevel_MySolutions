/*Counting Minutes
Have the function CountingMinutes(str) take the str parameter being passed which will be two times 
(each properly formatted with a colon and am or pm) separated by a hyphen and
return the total number of minutes between the two times. The time will be in a 12 hour clock format.

For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
Examples
Input: "12:30pm-12:00am"
Output: 690
Input: "1:23am-1:08am"
Output: 1425 */


function CountingMinutes(str) {
  // 1. Create the startTime and endTime by spliting the given str and using object destructuring method.
  const [startTime, endTime] = str.split("-"); // e.g. Input:"12:30pm-12:00am" =====> const[12:30pm, 12:00am].

  //1A. create getMinutesFromMidnight function to convert startTime and endTime to minutes from each day's midnight.
  const getMinutesFromMidnight = (timeStr) => {
    
  // 2.create the hourStr and minuteStr by slicing and spliting the given timeStr and using object destructuring method.
  //2A. example: "1:23am".slice(0, -2).split(":") =====>(1,23) 
  const [hourStr, minuteStr] = timeStr.slice(0, -2).split(":"); 
    
  // 3.convert the hourStr and minuteStr to integers
  // 3A. use calling parseInt method to hourStr and minuteStr. take note that parseInt method parses a value as a string and returns the first integer.
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // 4.check if the timeStr is in the PM
  const isPM = timeStr.slice(-2) === "pm";  //4A. meaning: position of slice(-2) === at "pm" word.

  // 5.if time is in tne PM , then convert the time to minutes from midnight and return with ternary operator
  const totalMinutes = hour * 60 + minute;
  return isPM ? totalMinutes + ( 12 * 60 ) : totalMinutes;
}
   
    // 6.convert the startTime and endTime to minutes from each day's midnight.
  const startMinutes = getMinutesFromMidnight(startTime);
  const endMinutes = getMinutesFromMidnight(endTime);

  // 7.calculate the time difference, make sure it must be + value.
  // 7A. we needd to add ( 24 * 60 ) minutes from yesterday to today and find remainder with divided by ( 24 * 60).
  const diffMinutes = (endMinutes - startMinutes + (24 * 60)) % ( 24 * 60); 

  // 8.return the diffMinutes.
  return diffMinutes;
}

   
// keep this function call here 
console.log(CountingMinutes(readline()));
