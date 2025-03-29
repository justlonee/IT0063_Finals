/* NOTES */
// THERE IS NO SET MAX QUANTITY YET
// ALL TALLY COUNTERS ARE SEPARATE PER ITEM CONTAINER

let addItem;
let subtractItem;
let removeProduct;

const addItemButton = $(".add-button");
const subtractItemButton = $(".subtract-button");
const removeProductButton = $(".remove-product");

$(document).ready(function() {

    function updateCart() {
        const productItem = $(".placeholder-item");
        let productItemCount = $(".placeholder-item").length;
        let totalCost = 0;

        productItem.each(function() {
            let quantity = parseInt($(this).find(".item-quantity").text()) || 1;
            let itemBasePriceText = $(this).find(".product-cost span").text().replace(/[^\d.]/g, "");
            let itemBasePrice = parseFloat(itemBasePriceText);
            let itemTotalPrice = itemBasePrice * quantity;
            totalCost += itemTotalPrice;

            $(this).find(".product-total-value").text(`₱${itemTotalPrice.toFixed(2)}`);
        });
    
        $("#page-title span").text(`(${productItemCount} Items)`)
        $(".total-cost").text(`₱${totalCost.toFixed(2)}`);
    }

    addItem = addItemButton.on("click", function() {
        let $count = $(this).closest(".quantity-selector-tally").find(".item-quantity");
        let addedCount = parseInt($count.text()) + 1;
        $count.text(addedCount);
        updateCart();
    });

    subtractItem = subtractItemButton.on("click", function() {
        let $count = $(this).closest(".quantity-selector-tally").find(".item-quantity");
        let currentCount = parseInt($count.text());
        if (currentCount > 1) {
            $count.text(currentCount - 1);
            updateCart();
        }
    });

    removeProduct = removeProductButton.on("click", function() {
        let productItem = $(this).closest(".placeholder-item");
        productItem.next(".product-divider").remove();
        productItem.remove();
        updateCart();
    });

    updateCart();

});
