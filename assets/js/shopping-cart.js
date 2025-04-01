/* NOTES */
// THERE IS NO SET MAX QUANTITY
// ALL TALLY COUNTERS AND PRODUCT TOTAL PRICES ARE SEPARATE PER ITEM CONTAINER

let saveComment;
let checkout;
let closeModal;

const saveCommentButton = $(".send-instructions");
const checkoutButton = $(".checkout-btn");
const closeModalButton = $(".close-modal");

// JS runs when the document loads
$(document).ready(function () {
  // For storing comments and displaying the modal
  let storedComment = "";
  let checkoutModal = new bootstrap.Modal($("#checkoutModal")[0]);

  // Dynamically updates the card everytime a change is made
  function updateCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productItemCount = cart.length;
    let totalCost = 0;
    console.log(cart);

    $(".card-item").empty();

    cart.forEach((product) => {
      product.image = "." + product.image;  // fixes link error by backtracking the directory
      const productHtml = `
      <div class="placeholder-item" data-name="${product.name}">
              <div class="product-item">
                <div>
                  <img src="${product.image}" class="product-img" />
                </div>
                <div>
                  <h5 class="card-title product-name">${product.name}</h5>
                  <p class="card-text product-cost">${product.price}</p>
                </div>
              </div>
              <div class="quantity-selector">
                <div class="quantity-selector-tally">
                  <div class="subtract-button-container">
                    <i
                      class="fa-solid fa-square-minus fa-2xl subtract-button"
                    ></i>
                  </div>
                  <div class="item-quantity-container">
                    <h1 class="item-quantity">${product.quantity}</h1>
                  </div>
                  <div class="add-button-container">
                    <i class="fa-solid fa-square-plus fa-2xl add-button"></i>
                  </div>
                </div>
                <p class="card-text remove-product">Remove</p>
              </div>
              <div class="product-total">
                <p class="product-total-value"></p>
              </div>
              <hr />
            </div>
            <hr class="product-divider" />
      `;

      $(".card-item").append(productHtml);

      let productPrice = parseFloat(product.price.replace(/[^\d.]/g, ""));
      let productQuantity = parseFloat(product.quantity);
      let productTotalCost = productPrice * productQuantity;

      $(`.placeholder-item[data-name="${product.name}"] .product-total-value`)
      .text(`₱${parseFloat(productTotalCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`); // replace adds comma separators every 3 digits

      totalCost += productTotalCost;
    });

    $("#page-title span").text(`(${productItemCount} Items)`);
    $(".total-cost").text(`₱${parseFloat(totalCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`); // replace adds comma separators every 3 digits
  }

  // Function that passes the comment value each change
  function checkComment(comment) {
    return comment === "" ? "" : comment;
  }

  // Tally counter for individual product count (increment)
  $(".card-item").on("click", ".add-button", function () {
    const productName = $(this).closest(".placeholder-item").data("name");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex(
      (product) => product.name === productName
    );
    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart();
    }
  });

  // Tally counter for individual product count (decrement)
  $(".card-item").on("click", ".subtract-button", function () {
    const productName = $(this).closest(".placeholder-item").data("name");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex(
      (product) => product.name === productName
    );
    if (productIndex !== -1 && cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCart();
    }
  });

  // Removes the product entirely from the product list
  $(".card-item").on("click", ".remove-product", function () {
    const productName = $(this).closest(".placeholder-item").data("name");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((product) => product.name !== productName);
    $(".card-item").html(``);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  });

  // Saves the comment every time it is pressed
  saveComment = saveCommentButton.on("click", function () {
    let commentNotice = $(".comment-notice");
    let comment = $(".order-instructions").val();

    let currentComment = storedComment;
    storedComment = checkComment(comment);

    if (storedComment === "") {
      commentNotice.text(
        currentComment === "" ? "Try again." : "Removed Comment!"
      );
    } else {
      commentNotice.text(
        currentComment === "" ? "Comment Saved!" : "Comment Changed!"
      );
    }

    commentNotice.css("display", "flex");
  });

  // Proceeds to the checkout window
  checkout = checkoutButton.on("click", function (e) {
    let totalCost = parseFloat(
      $(".total-cost")
        .text()
        .replace(/[^\d.]/g, "")
    );

    if (totalCost === 0) {
      e.preventDefault();
      alert("You cannot proceed to checkout without buying anything.");
      return;
    }

    $("#customer-comment").val(storedComment);
    const productList = $(".product-list");
    productList.empty();

    const productItem = $(".placeholder-item");

    // Gets the product name, quantity, and total price of each product item in the list and appends it as a list item
    productItem.each(function () {
      let productName = $(this).find(".product-name").text();
      let quantity = $(this).find(".item-quantity").text();
      let totalPrice = $(this).find(".product-total-value").text();

      productList.append(
        `<li>${productName} (${quantity}) - ${totalPrice}</li>`
      );
    });

    checkoutModal.show();
  });

  // Closes checkout window
  closeModal = closeModalButton.on("click", function () {
    checkoutModal.hide();
  });

  // Unfinished purchase notification button
  /*
  $(".purchase-btn").on("click", function(e) {
    let validForm = $("#order-form").checkValidity();

    if (!validForm) {
      e.preventDefault();
      $("#order-form").reportValidity();
    } else {
      alert("Your order has been placed!");
    }
  });
  */

  // Refreshes the changes at the end
  updateCart();
});
