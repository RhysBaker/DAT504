
  let url = "http://localhost:3000/getItems";

function added_item() {
   alert("Added Item to your profile");
};


function showCollection() {
  fetch(url)
      .then(function(response) {
          return response.json();
  })

  .then(function(myJson) {

      var findUser =  myJson.filter(function(username) {
      return username.username == "rhysbaker";
      });
      console.log("all items from username", findUser);


      var findTshirt =  findUser.filter(function(type) {
      return type.type == "tshirt";
      });
      console.log("tshirts", findTshirt);

      var findJeans =  findUser.filter(function(type) {
      return type.type == "jeans";
      });
      console.log("jeans", findJeans);

      var findShorts =  findUser.filter(function(type) {
      return type.type == "shorts";
      });
      console.log("shorts", findShorts);

      var findHoodie =  findUser.filter(function(type) {
      return type.type == "hoodie";
      });
      console.log("hoodies", findHoodie);
})
}

function displayCollection() {
  const clothesList = document.querySelector('.clothesList');
  fetch(url)
      .then(function(response) {
          return response.json();
  })
  .then(function(myJson) {
    var findUser =  myJson.filter(function(username) {
    return username.username == "rhysbaker";
    });
          let dataFeed = findUser.map((myClothes) => {
              return `
                      <ul stlye="list-style-type: none;" id="clothingList">
                      <li id='cL'>Type: ${myClothes.type}</li>
                      <li id='cL'>Colour: ${myClothes.colour}</li>
                      <li id='cL'>Warmth: "${myClothes.warmth}"</li>
                      </ul>`
          }).join('');
          clothesList.innerHTML = dataFeed;
      })
      .catch(err => { throw err });
  };
