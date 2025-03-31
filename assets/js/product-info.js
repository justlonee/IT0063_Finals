$(document).ready(function () {
  const models = JSON.parse(localStorage.getItem("selectedLaptop"));

  if (models) {
    $("#current-img").attr("src", "." + models.images[1]);
    $("#product-name").text(models.name);
    $("#reviews").html(models.reviews);
    $("#brand-name").text(models.brand);
    $("#description").text(models.description);
    $("#price").text(models.price);

    $("#processor").text(models.specs.processor);
    $("#display").text(models.specs.display);
    $("#gpu").text(models.specs.gpu);
    $("#memory").text(models.specs.memory);
    $("#storage").text(models.specs.storage);
    $("#os").text(models.specs.OS);

    // image selector
    $(".image-repo").each(function (index) {
      $(this).attr("src", "." + models.images[index + 1]);
    });
    $(".image-repo").on("click", function () {
      $("#current-img").attr("src", $(this).attr("src"));
      $(".image-repo").removeClass("active");
      $(this).addClass("active");
    });
  } else {
    console.error("No laptop data found!");
  }
});

// <div class="image-selector">
//           <img src="" alt="..." class="image-repo" />
//           <img src="" alt="..." class="image-repo" />
//           <img src="" alt="..." class="image-repo" />
//           <img src="" alt="..." class="image-repo" />
//         </div>
//         <div class="display-img">
//           <img src="" alt="..." id="current-img" />
//           </div>
