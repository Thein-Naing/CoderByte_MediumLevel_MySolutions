


   let leftSqure = 0;
   let rightSquare = 0;
   let leftCurly = 0;
   let rightCurly = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i] === "(") {
      leftCurly += 1;
      }
    if(str[i] === ")") {
      rightCurly += 1;
      }
    if(str[i] === "[") {
      leftSqure += 1;
      }
    if(str[i] ==="]") {
      rightSquare += 1;
      }
  }
  if(leftCurly === 0 && rightCurly === 0 && leftSqure === 0 && rightSquare === 0) {
    return 1;
  }
  else if(leftCurly === rightCurly && leftSqure === rightSquare) {
    return 1 +" "+ (leftCurly + leftSqure);
  }
  else 
    return 0;
         
}
