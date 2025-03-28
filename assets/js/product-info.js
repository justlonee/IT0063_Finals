document.addEventListener("DOMContentLoaded", function () {
  const models = JSON.parse(localStorage.getItem("selectedLaptop"));

  if (models) {
    document.getElementById("current-img").src = models.images[1];
    document.getElementById("product-name").textContent = models.name;
    document.getElementById("reviews").textContent = models.reviews;
    document.getElementById("brand-name").textContent = models.brand;
    document.getElementById("description").textContent = models.description;
    document.getElementById("price").textContent = models.price;

    // image selector
    const imagesRepository = document.querySelectorAll(".image-repo");

    imagesRepository.forEach((image, index) => {
      image.src = models.images[index + 1];
      console.log(models.images[index + 1]);
    });
  } else {
    console.error("No laptop data found!");
  }
});

// console.log(localStorage);
