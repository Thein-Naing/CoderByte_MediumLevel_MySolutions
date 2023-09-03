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
  // 1.Split the start and end times from the input string
  const [startTime, endTime] = str.split("-");

  // 2.Convert the startTime and endTime to minutes from midnight
  const startMinutes = getMinutesFromMidnight(startTime);
  const endMinutes = getMinutesFromMidnight(endTime);

  // 3.Calculate the time difference, make sure it must be + value.
  const diffMinutes = (endMinutes - startMinutes + (24 * 60)) % ( 24 * 60); //3A. ( 24 * 60 ) minutes from yesterday to today.

  // 4.Return the time difference in minutes
  return diffMinutes;
}

function getMinutesFromMidnight = (timeStr) => {
  // 5.Split the hours and minutes from the time string
  const [hourStr, minuteStr] = timeStr.slice(0, -2).split(":");

  // 6.Convert the hours and minutes to integers
  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // 7.Determine if the time is in the PM
  const isPM = timeStr.slice(-2) === "pm";

  // 8.Convert the time to minutes from midnight
  const totalMinutes = hour * 60 + minute;
  return isPM ? totalMinutes + ( 12 * 60 ) : totalMinutes;
}
   
// keep this function call here 
console.log(CountingMinutes(readline()));
