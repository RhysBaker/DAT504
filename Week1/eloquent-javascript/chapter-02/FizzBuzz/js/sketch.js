//Loop
for (let num = 1; num <=100; num++){ //While num is less than 100 until it reaches 100 add num to itself
let value = ''; //Emtpy string
  if(num % 3 == 0){ //If the remainder of the num variable when divded by 3 is equal to 0, value has Fizz added to the empty string
    value += 'Fizz';
  }
  if(num % 5 == 0){ // If the remainder of num variable when divded by 5 is equal to 0, value has Buzz added to the empty string
    value += 'Buzz';
  }
  else if(num % 3 == 0 && num % 5 == 0){ // If the remainder of num variable when divded by 3 AND 5 is equal to 0, value has Buzz added to the empty string
    value += 'FizzBuzz';
  }
  console.log(value || num); //Choosing to print either value(Fizz/Buzz/FizzBuzz) or the num 1,2... etc'
}
