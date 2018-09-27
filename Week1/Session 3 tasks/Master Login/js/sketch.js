var login = prompt('Please login');

if (login == null) {
  document.getElementById('welcome').innerHTML = 'Hello ' + 'Invalid User' + ', I dont know you.';
}

if (login != null) {
  document.getElementById('welcome').innerHTML = 'Hello ' + login + ', get a better name.';
}

if (login == 'admin') {
  var adminPass = prompt('Please enter the password');
  if (adminPass == '123') {
    document.getElementById('welcome').innerHTML = 'Hello, Master ' + login;
  }

  while (adminPass != '123') {
    if (adminPass == null) {
      document.getElementById('welcome').innerHTML = 'Why did you cancel?';
      break;
    }
    var adminPass = prompt('Wrong password, try again.');
    document.getElementById('welcome').innerHTML = 'Hello, Master ' + login;
  }
}
