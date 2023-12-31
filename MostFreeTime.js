/* Have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day 
 and will be filled with events that span from time X to time Y in the day. 
The format of each event will be hh:mmAM/PM-hh:mmAM/PM. 
For example, strArr may be [“10:00AM-12:30PM”,”02:00PM-02:45PM”,”09:10AM-09:50AM”]. 
Your program will have to output the longest amount of free time available between the start of your first event 
and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day 
and the latest event should be the latest event in the day. 
The output for the previous input would therefore be 01:30 
(with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM).
The input will contain at least 3 events and the events may be out of order.*/
  
    
  //1. declare strArr for testing purpose or can skip this step if it is given.
let  strArr = ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM" ];

const MostFreeTime = (strArr) => { 
 
  // 2.initialize an empty array to store the minutes of each event.
  let minArr = [];
 
  // 2A.initial state of longest free time shall be "zero".
  let longest = 0;
  let minutes = 0 
  
  // 3. create a function to convert a time string to minutes
  const  ParseTime = (time) => {
      // let minutes = 0 
   // 3A. use string.match(regex) method  to add the hours (of PM time).
      if(time.match(/pm/gi)) {  //The regular expression includes g flag for global search and i flag for case in which upper/lower case differences will be ignored.
          minutes += 12 * 60  // if time is pm times =====> minutes = minutes + ( 12 * 60)
      }
      // 4.add the hours (of AM time) and converted to minutes
      if(time.split(':')[0] !== '12') { // 11:59AM.split(":")[0] and here time[0] = 11 !==12 & time =[11 59]
         minutes += time.split(':')[0] * 60  // so  minutes = minutes + 11 * 60
      }  
      // 5. add the minutes (of AM time ) and convert to interger and add by using string.match(regex) method
      minutes += Number(time.split(':')[1].match(/[0-9][0-9]/)[0]) // here time[1] = 59 of time[11 59]

    //5A . return minutes.
      return minutes
  }

    // 6.loop through the array of events and convert each time to minutes by calling with ParseTime function. 
  for(let i = 0; i < strArr.length; i++) {
   
   //6A. This is minutes for "09:10AM-09:50AM" event. Eventually it will calculate minutes of all events.   
       timeA = ParseTime(strArr[i].split('-')[0]); //"09:10AM-" console.log(timeA) === 550 for 09:10AM
       timeB = ParseTime(strArr[i].split('-')[1]); // "-09:50AM" console.log(timeB) === 590 for 09:50AM

    // 6B. add converted minutes elements into minArr by using arr.push method.
      minArr.push([timeA, timeB]);
  }    
    // 7.sort the array of minutes in ascending order.
  minArr.sort(function(a, b) {
      return a[0] - b[0]
  })
  
  // 8.loop through the sorted array and find the longest free time
  for(let j = 0; j < minArr.length - 1; j++) {
      if(longest < minArr[j + 1][0] - minArr[j][1]) {
          longest = minArr[j + 1][0] - minArr[j][1]
      }
  }
  
  // 9.convert the longest free time (minutes) to hours and minutes using while loop.
  let hours = 0
  while(longest >= 60) {
      longest -= 60;
      hours += 1;
  }
  
  // 10.add a heading zero for (single-digit) minutes & (single-digit) hours
  if(hours.toString().length === 1) {
      hours = "0" + hours   //01:10
  }
  if(longest.toString().length === 1) {
      return hours + ":0" + longest    //00:01
  } else {
      return hours + ":" + longest   //11:59
  }
}

// 11.keep this function call here 
console.log(MostFreeTime(strArr));

//12. 01:30
