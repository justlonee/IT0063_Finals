/* NOTES */
// THERE IS NO SET MAX QUANTITY YET
// ALL TALLY COUNTERS ARE SEPARATE PER ITEM CONTAINER

// Note: Code must still be changed to accommodate for the "add to cart" button of the actual product info cards

// sorry kung magulo code

let addItem;
let subtractItem;
let removeProduct;
let saveComment;
let checkout;
let closeModal;

// Button variables
const addItemButton = $(".add-button");
const subtractItemButton = $(".subtract-button");
const removeProductButton = $(".remove-product");
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
    const productItem = $(".placeholder-item");
    let productItemCount = $(".placeholder-item").length;
    let totalCost = 0;

    // Loops through each of the HTML's product items
    productItem.each(function () {
      let quantity = parseInt($(this).find(".item-quantity").text()) || 1;
      let itemBasePriceText = $(this)
        .find(".product-cost span")
        .text()
        .replace(/[^\d.]/g, "");
      let itemBasePrice = parseFloat(itemBasePriceText);
      let itemTotalPrice = itemBasePrice * quantity;
      totalCost += itemTotalPrice;

      $(this)
        .find(".product-total-value")
        .text(`₱${itemTotalPrice.toFixed(2)}`);
    });

    // Dynamically changes item count of the title and total cost
    $("#page-title span").text(`(${productItemCount} Items)`);
    $(".total-cost").text(`₱${totalCost.toFixed(2)}`);
  }

  // Function that passes the comment value each change
  function checkComment(comment) {
    return comment === "" ? "" : comment;
  }

  // Tally counter for individual product count (increment)
  addItem = addItemButton.on("click", function () {
    let $count = $(this)
      .closest(".quantity-selector-tally")
      .find(".item-quantity");
    let addedCount = parseInt($count.text()) + 1;
    $count.text(addedCount);
    updateCart();
  });

  // Tally counter for individual product count (decrement)
  subtractItem = subtractItemButton.on("click", function () {
    let $count = $(this)
      .closest(".quantity-selector-tally")
      .find(".item-quantity");
    let currentCount = parseInt($count.text());
    if (currentCount > 1) {
      $count.text(currentCount - 1);
      updateCart();
    }
  });

  // Removes the product entirely from the product list
  removeProduct = removeProductButton.on("click", function () {
    let productItem = $(this).closest(".placeholder-item");
    productItem.next(".product-divider").remove();
    productItem.remove();
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

  // Refreshes the changes at the end
  updateCart();
});
