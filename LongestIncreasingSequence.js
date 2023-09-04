//. This is my naive solution but it is not formatted as coderbyte.
let arr = [10, 22, 9, 33, 21, 50, 41, 60];
let i = arr.length;
let finalLIS = []; /*1.  LIS of full array of size n is store here ===> [Length of LIS ending with element arr[i-1],
                         Length of LIS ending with an element before arr[i-1], e.t.c ]*/
const lisI = (arr, i) => {
  //2. Initialize LIS values for all indexes
  let initialLisLength = 0; //3.e.g. ===> [0,0,0,0,0,0,.....]
  let maxLisLength= 1; // 3A. maxLisLength is length of LIS ending with arr[i-1]
  for (let j = 1; j < i; j++) {
    initialLisLength= lisI(arr, j); //4. initialLisLength is length of LIS ending before arr[i-1] , say arr[j-1].
    if (arr[j - 1] < arr[i - 1] && initialLisLength + 1 > maxLisLength)
      maxLisLength = initialLisLength + 1;
  }
  // 5. Compare maxLisLength with the overall finalLis & update the overall finalLis if needed
  if (finalLIS < maxLisLength)
      finalLIS = maxLisLength;

  // 6.Return length of LIS ending with arr[i-1]
  return maxLisLength;
}
// 7. The update function for lisI()
const lisJ = (arr, i) => {
  // 8. The function lisI() stores its result in finalLis.so add the function lisI() to finalLIS by using push
  finalLIS.push(lisI(arr, i));

  return finalLIS; // 8.returns finalLis 
}

console.log(lisJ(arr, i));


