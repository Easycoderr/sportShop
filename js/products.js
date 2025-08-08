import {
  myCart,
  displayCartCount,
  saveMyCartsToLocalStorage,
} from "./my-cart-data.js";
import { switchCurrency } from "./switch-currency.js";
import { products, setToLocalStorage } from "./products-data.js";
import { sortProduct } from "./sort-product.js";
import { showNotfication } from "./utils/notfication.js";
import { convertUSDtoIQD } from "./utils/currencyExchange.js";
const productListEl = document.querySelector(".products-grid");
const filterSelectEl = document.querySelector(".filter-select");

let currencyIQD = "";
function displayProducts(newProduct, data, currencyType = "usd") {
  let productToPrint = newProduct ? newProduct : products;
  currencyIQD = data ? data : currencyIQD;
  let htmlProducts = "";
  productToPrint.forEach((item) => {
    const iqdPrice = convertUSDtoIQD(item.price, currencyIQD);
    const price = currencyType === "usd" ? `$${item.price}` : `${iqdPrice}`;
    htmlProducts += `
    <div class="product-card" data-id="${item.id}">
            <div class="product-image">
              <img src="${item.image}" alt="" />
            </div>
            <div class="product-info">
              <h3 class="product-name">${item.name}</h3>
                <div class="product-price">${price}</div>
              <div class="quantity-selector">
                <button class="quantity-btn minus">-</button>
                <input
                  type="number"
                  class="quantity-input"
                  value="1"
                  min="1"
                  max="10"
                />
                <button class="quantity-btn plus">+</button>
              </div>
              <button class="btn">Add to Cart</button>
            </div>
          </div>`;
  });
  productListEl.innerHTML = htmlProducts;
  quantitiyFunctionality();

  document.querySelectorAll(".btn").forEach((e) => {
    e.addEventListener("click", addToCart);
  });
}

function addToCart(e) {
  const quantityValue = e.target.parentElement.querySelector(".quantity-input");
  const numQuantity = parseInt(quantityValue.value);
  const prooductId = e.target.parentElement.parentElement.dataset.id;
  products.forEach((item) => {
    if (item.id === prooductId) {
      if (numQuantity <= item.Quantity) {
        const existItem = myCart.find((el) => el.id === item.id);
        if (existItem) {
          const index = myCart.findIndex((item) => item.id === existItem.id);
          item.Quantity -= numQuantity;
          setToLocalStorage(products);
          myCart[index].Quantity += numQuantity;

          saveMyCartsToLocalStorage(myCart);
        } else {
          item.Quantity -= numQuantity;
          setToLocalStorage(products);
          myCart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            Quantity: numQuantity,
          });
          saveMyCartsToLocalStorage(myCart);
        }
        showNotfication("addproduct");
        quantityValue.value = 1;
        displayCartCount();
      } else {
        showNotfication("NEQ");
      }
    }
  });
}
function quantitiyFunctionality() {
  document.querySelectorAll(".quantity-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentNode.querySelector(".quantity-input");
      let value = parseInt(input.value);
      if (this.classList.contains("minus") && value > 1) {
        input.value = value - 1;
      } else if (this.classList.contains("plus") && value < 10) {
        input.value = value + 1;
      }
    });
  });
}
switchCurrency("product", displayProducts);
filterSelectEl.addEventListener("click", () => {
  sortProduct(displayProducts);
});
displayCartCount();
displayProducts();
