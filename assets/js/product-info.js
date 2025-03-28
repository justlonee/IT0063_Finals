document.addEventListener("DOMContentLoaded", function () {
  const models = JSON.parse(localStorage.getItem("selectedLaptop"));

  if (models) {
    document.getElementById("current-img").src = "." + models.images[1];
    document.getElementById("product-name").textContent = models.name;
    document.getElementById("reviews").innerHTML = models.reviews;
    document.getElementById("brand-name").textContent = models.brand;
    document.getElementById("description").textContent = models.description;
    document.getElementById("price").textContent = models.price;

    document.getElementById("processor").textContent = models.specs.processor;
    document.getElementById("display").textContent = models.specs.display;
    document.getElementById("gpu").textContent = models.specs.gpu;
    document.getElementById("memory").textContent = models.specs.memory;
    document.getElementById("storage").textContent = models.specs.storage;
    document.getElementById("os").textContent = models.specs.OS;

    // image selector
    const imagesRepository = document.querySelectorAll(".image-repo");

    imagesRepository.forEach((image, index) => {
      image.src = "." + models.images[index + 1];
      // console.log(".", models.images[index + 1]);
    });
  } else {
    console.error("No laptop data found!");
  }
});

// console.log(localStorage);
