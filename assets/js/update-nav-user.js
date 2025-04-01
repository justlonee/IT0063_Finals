$(document).ready(function () {
  let user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    $(".username").html(`<span>${user.username} | </span>`);
    $(".login").html(`Logout`);
    $(".login-burger").html(`Logout`);
  }

  $(".login").on("click", function () {
    localStorage.removeItem("currentUser");
    location.reload();
  });

  $(".login-burger").on("click", function () {
    localStorage.removeItem("currentUser");
    location.reload();
  });
});

//  <div class="nav-right">
// <a href="pages/login.html" class="login">Login / Signup</a>
