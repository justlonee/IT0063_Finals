$(document).ready(function () {
  let user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    $(".username").html(
      `<span>${user.username}</span> | <a href="#" id="logout">Logout</a>`
    );
    $(".login").html(``);
  }

  $("#logout").on("click", function () {
    localStorage.removeItem("currentUser");
    location.reload();
  });
});

//  <div class="nav-right">
// <a href="pages/login.html" class="login">Login / Signup</a>
