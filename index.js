// !Login Page variables
var loginForm = document.getElementById('loginForm');
var loginEmail = document.getElementById('loginEmail');
var loginPass = document.getElementById('loginPass');

var usersDataList = JSON.parse(localStorage.getItem('userDB'));

//Handling Log in form
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var userData = getSigninData();
  checkSigninData(userData);
});

function getSigninData() {
  var userData = {
    email: loginEmail.value,
    pass: loginPass.value,
  };
  return userData;
}

function checkSigninData(userData) {
  //   console.log(usersDataList);
  for (var i = 0; i < usersDataList.length; i++) {
    if (usersDataList[i].email === userData.email) {
      if (usersDataList[i].pass === userData.pass) {
        gotoHomePage(usersDataList[i].name);
      } else displayCheckMsg('invalid password');
    } else displayCheckMsg('invalid email and password');
  }
}

function displayCheckMsg(msg) {
  var checkMsg = document.getElementById('checkMsg');
  console.log(checkMsg.classList);
  checkMsg.classList.replace('d-none', 'd-block');
  checkMsg.innerHTML = msg;
}

function gotoHomePage(name) {
  localStorage.setItem('name', name);
  var homePage = window.location.href.replace('index', 'home');
  window.open(homePage, '_self');

}
