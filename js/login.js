// login.js
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".login-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value.trim();
    var pass = document.getElementById("password").value.trim();

    if (!email || !pass) {
      alert("Please enter both email and password.");
      return;
    }

    // Demo redirect
    window.location.href = "home.html";
  });
});
