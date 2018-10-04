let chessBoard = "";
let chessSet = prompt('Please enter an integer no lower than 8');
let createHash;
for (let i = 0; i < chessSet; i++) {
  for (let x = 0; x < chessSet; x++) {
    remain(i, x);
    if (createHash == true) {
      chessBoard += "#";
    };
    if (createHash == false) {
      chessBoard += " ";
    };
  };
  chessBoard += "\n";
};

console.log(chessBoard);


function remain(a, b){
  if((a + b) % 2 == 0){
    createHash = true;
  };
  if((a + b) % 2 == 1){
    createHash = false;
  };
};
