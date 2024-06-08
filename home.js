var userName = localStorage.getItem('name');
console.log(document.getElementById('homePage'));
document.getElementById('homePage').innerHTML = `Welcome ${userName}`;

var logout = document.getElementById('logout');

logout.addEventListener('click', function () {
  gotoSigninPage();
});

function gotoSigninPage() {
  var signinPage = window.location.href.replace('home', 'index');
  window.open(signinPage, '_self');
}
