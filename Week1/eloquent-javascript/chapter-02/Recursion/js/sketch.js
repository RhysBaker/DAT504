let userNum1 = prompt('Please enter your first integer');
let userNum2 = prompt('Please enter your second integer');
let userNum3 = prompt('Please enter your third integer');

document.getElementById("myID1").innerHTML = evenFunc(userNum1);
document.getElementById("myID2").innerHTML = evenFunc(userNum2);
document.getElementById("myID3").innerHTML = evenFunc(userNum3);

console.log(evenFunc(userNum1));
console.log(evenFunc(userNum2));
console.log(evenFunc(userNum3));


function evenFunc(num){
  if (num %2 == 0){
    return true;
  }
  else if (num %2 == 1){
    return false;
  }
  else if (num %2 < 0){
    return evenFunc(-num);
  }
}
