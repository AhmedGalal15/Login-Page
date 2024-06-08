// !Sign Up Page variables
var signUpForm = document.getElementById('signupForm');
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPass = document.getElementById('userPassword');
var flag = 0; // count number of validated inputs

var usersDataList = [];

if (localStorage.getItem('userDB') === null) {
  usersDataList = [];
} else {
  usersDataList = JSON.parse(localStorage.getItem('userDB'));
}

//Handling sign Up form
signUpForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var userData = getUserData(); //collect user data from form
  // !check no of inputs which passes validation inorder to save userData
  if (flag === 2) {
    saveUserData(userData); // save user data in array and in local storage
    gotoSigninPage();
  }
});

function getUserData() {
  var userData = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };
  return userData;
}

function validation(inputId, regexKey, alertELID) {
  var input = document.getElementById(inputId);
  var regex = {
    name: /\w{3,}/,
    email: /[^@ \t\r\n]+@[^@ \t\r\n]{1,}\.[^@ \t\r\n]{1,}/,
  };
  input.classList.remove('is-invalid', 'is-valid');
  if (regex[regexKey].test(input.value)) {
    input.classList.add('is-valid');
    document.getElementById(alertELID).classList.replace('d-block', 'd-none');
  } else {
    input.classList.add('is-invalid');
    document.getElementById(alertELID).classList.replace('d-none', 'd-block');
  }
  enableSignup();
}

function enableSignup() {
  var signUpInputs = Array.from(document.querySelectorAll('.signupInput'));
  flag = 0;
  for (var i = 0; i < signUpInputs.length; i++) {
    if (signUpInputs[i].classList.contains('is-valid')) {
      flag++;
    }
  }
}

function saveUserData(userData) {
  usersDataList.push(userData);
  localStorage.setItem('userDB', JSON.stringify(usersDataList));
  console.log(usersDataList);
}

function gotoSigninPage() {
  var signinPage = window.location.href.replace('signup', 'index');
  window.open(signinPage, '_self');
}
