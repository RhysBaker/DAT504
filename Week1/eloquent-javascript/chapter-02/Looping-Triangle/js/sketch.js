
let tri = '#';
let rit = '@';

function myTri(){
for (tri ; tri.length < 9; tri += "#"){ // While the total 'length' of tri is less than 9, add another '#' to tri
console.log(tri); // console log each loop through the value of tri
document.getElementById("paste").innerHTML = tri; // Sends the value of tri to the 'paste' ID in the HTML

// Will only show the final value of tri as it updates the same ID untill finished.

if (tri.length >= 8 ){ // If the length of tri is more than or equal to 8 run this
  for (rit ; rit.length < 9; rit += "@"){ // While the total 'length' of rit is less than 9, add another '@' to rit
  console.log(rit); // console log each loop through the value of rit
  document.getElementById("paste2").innerHTML = rit; // Sends the value of rit to the 'paste2' ID in the HTML
    }
  }
}
}

myTri();
