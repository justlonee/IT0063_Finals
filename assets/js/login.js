let users;
$(document).ready(function () {
  // Initially shows the login section
  $("#login").addClass("active");

  // Click event listeners that navigate between the three sections

  // Login section
  $(".login-link").on("click", function (e) {
    e.preventDefault();
    showSection("login");
  });

  // Register section
  $(".register-link").on("click", function (e) {
    e.preventDefault();
    showSection("register");
  });

  // Password reset section
  $(".forgot-password-link").on("click", function (e) {
    e.preventDefault();
    showSection("pass-reset");
  });

  // Password validation
  $("#register form").on("submit", function (e) {
    e.preventDefault();
    const username = $("#register-username").val();
    const password = $("#register-password").val();
    const confirmPassword = $("#register-confirm-password").val();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    }

    users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.username === username)) {
      alert("Username has already been taken.");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful. You may now log in.");
    window.location.href = "login.html";
  });

  $("#login form").on("submit", function (e) {
    e.preventDefault();
    const password = $("#login-password").val();
    const username = $("#login-username").val();

    users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful. You may now continue to the website.");
      window.location.href = "../index.html";
    } else {
      console.log(users);
      alert("Incorrect username or password. Please try again.");
    }
  });

  // Toggle password visibility
  $(".toggle-password").on("click", function () {
    const passwordInput = $(this).prev();
    const icon = $(this).find("i");

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      icon.removeClass("bi-eye-slash").addClass("bi-eye");
    } else {
      passwordInput.attr("type", "password");
      icon.removeClass("bi-eye").addClass("bi-eye-slash");
    }
  });

  function showSection(sectionId) {
    // Hides all sections first
    $("#login, #register, #pass-reset").removeClass("active");

    // Then shows the section of the selected link
    $("#" + sectionId).addClass("active");
  }
});
