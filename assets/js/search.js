$(document).ready(function () {
  function search() {
    const searchQuery = $("#search-input").val().toLowerCase();

    if (!searchQuery) {
      return;
    }

    const queriedLaptop = Object.values(laptops).find((laptop) =>
      laptop.name.toLowerCase().includes(searchQuery)
    );

    if (queriedLaptop) {
      localStorage.setItem("selectedLaptop", JSON.stringify(queriedLaptop));
      window.location.href = window.location.pathname.includes("/pages/")
        ? "./product-info.html"
        : "./pages/product-info.html";
    } else {
      alert("No matches found.");
    }
  }
  $("#search-button").on("click", search);
  $("#search-input").on("keyup", function (event) {
    var keycode = event.keyCode || event.which;
    if (keycode == 13 && $("#search-input").val() != "") {
      search();
    }
  });
});

// https://stackoverflow.com/questions/25494133/how-to-combine-two-event-handlers-into-one-in-jquery
// https://stackoverflow.com/questions/979662/how-can-i-detect-pressing-enter-on-the-keyboard-using-jquery
