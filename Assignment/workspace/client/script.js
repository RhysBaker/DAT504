
let url = "http://localhost:3000/getItems";
let currentUser;
document.cookie = currentUser;

function added_item() {
   alert("Added Item to your profile");
};

function getuser() {
  currentUser = document.getElementsByName("username")[0].value;
  return currentUser;
}
