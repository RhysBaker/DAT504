let countedChar = 0;
let userString = prompt('Enter a word');
let userCharCount = prompt('What letter would you like me to count?');

document.getElementById("p").innerHTML = `The total number of, (${userCharCount}'s), in your word, (${userString}), is ${countChar(userString, userCharCount)} `;
console.log(countChar(userString, userCharCount));

function countChar(myString, char){
  for(let x = 0; x < myString.length; x++){
    if(myString[x] == char){
      countedChar += 1;
    }
  }
  return countedChar;
}
