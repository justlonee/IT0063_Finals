$(document).ready(function () {
  $("#search-button").on("click", function () {
    const searchQuery = $("#search-input").val().toLowerCase();

    if (!searchQuery) {
      alert("Test");
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
      // msg alert
    }
  });
});
