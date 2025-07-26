import {
  myCart,
  displayCartCount,
  saveMyCartsToLocalStorage,
} from "./my-cart-data.js";
import { switchCurrency } from "./switch-currency.js";
import { products, setToLocalStorage } from "./products-data.js";
import { orderSummary } from "./order-summary.js";
import { showNotfication } from "./utils/notfication.js";
import { convertUSDtoIQD } from "./utils/currencyExchange.js";
const cartItemEl = document.querySelector(".cart-items");
const cartNumTitleEl = document.querySelector(".cart-num-title");
const orderSummaryDetails = document.querySelector(".order-summary-details");
function displayCartItems(data, currencyType = "usd") {
  const currencyIQD = data;
  cartNumTitleEl.innerHTML = `Cart Items (${myCart.length})`;
  let cartItems = "";
  myCart.forEach((item) => {
    const iqdPrice = convertUSDtoIQD(item.price, currencyIQD);
    const price = currencyType === "usd" ? `$${item.price}` : `${iqdPrice}`;
    const totalPrice =
      currencyType === "usd"
        ? `$${item.Quantity * item.price}`
        : `${convertUSDtoIQD(item.Quantity * item.price, currencyIQD)}`;
    cartItems += `
            <div class="cart-item" >
              <div class="cart-item-image">
                <img src="${item.image}" alt="" />
              </div>
              <div class="cart-item-info">
                <div class="cart-item-header">
                  <h3 class="cart-item-name">${item.name}</h3>
                  <div class="cart-item-price">${price}</div>
                </div>
                <div class="cart-item-details" data-id="${item.id}">
                  <div>
                    <div class="cart-quantity">
                      <p class="cart-item-quantity">Quantity: ${item.Quantity}</p> 
                      <button class="edit">Edit</button>
                      <button class="remove-btn">Remove</button> 
                    </div>  
                    <div class="update-item-quantity unvisible">
                      <input type="Number" value="" class="update-item-input"/>
                      <button class="update-btn">Update</button>
                    </div>
                    
                  </div>
                  <div class="cart-item-total">${totalPrice}</div>
                </div>
              </div>
            </div>`;
  });
  cartItemEl.innerHTML = cartItems;
  document.querySelectorAll(".remove-btn").forEach((e) => {
    e.addEventListener("click", removeCart);
  });
  document.querySelectorAll(".edit").forEach((e) => {
    e.addEventListener("click", editQuantity);
  });
  orderSummaryDetails.innerHTML = orderSummary(currencyType, currencyIQD);
}

function removeCart(e) {
  const itemId = e.target.parentElement.parentElement.parentElement.dataset.id;
  const itemIndex = myCart.findIndex(({ id }) => id === itemId);
  const removedItemQuantity = myCart[itemIndex].Quantity;
  products.forEach((item) => {
    if (item.id === itemId) {
      item.Quantity += removedItemQuantity;
      setToLocalStorage(products);
    }
  });

  myCart.splice(itemIndex, 1);
  saveMyCartsToLocalStorage(myCart);
  displayCartItems();
  displayCartCount();
  showNotfication("remove");
}

function editQuantity(e) {
  const itemId = e.target.parentElement.parentElement.parentElement.dataset.id;
  const doc = e.target.parentElement.parentElement;
  const updateEl = doc.querySelector(".update-item-quantity");
  const quantitiyEl = doc.querySelector(".cart-quantity");
  const inputEl = doc.querySelector(".update-item-input");
  quantitiyEl.classList.add("unvisible");
  updateEl.classList.remove("unvisible");
  const itemIndex = myCart.findIndex(({ id }) => id === itemId);
  const editItemQuantity = myCart[itemIndex].Quantity;
  inputEl.value = editItemQuantity;
  doc.querySelector(".update-btn").addEventListener("click", () => {
    const Quantity = Number(inputEl.value);
    products.forEach((item) => {
      if (item.id === itemId) {
        let QuanToProduct = "";
        if (Quantity >= editItemQuantity) {
          QuanToProduct = Quantity - editItemQuantity;
          if (item.Quantity >= QuanToProduct) {
            item.Quantity -= QuanToProduct;
            myCart[itemIndex].Quantity += QuanToProduct;
            editQuantityReload(quantitiyEl, updateEl);
          } else {
            showNotfication("NEQ");
          }
        } else if (Quantity < editItemQuantity) {
          QuanToProduct = editItemQuantity - Quantity;
          item.Quantity += QuanToProduct;
          myCart[itemIndex].Quantity -= QuanToProduct;
          if (myCart[itemIndex].Quantity === 0) {
            myCart.splice(itemIndex, 1);
          }
          editQuantityReload(quantitiyEl, updateEl);
        }
      }
    });
  });
}
function editQuantityReload(quantitiyEl, updateEl) {
  showNotfication("update");
  setToLocalStorage(products);
  saveMyCartsToLocalStorage(myCart);
  switchCurrency("updatemycart", displayCartItems);
  displayCartCount();
  quantitiyEl.classList.remove("unvisible");
  updateEl.classList.add("unvisible");
}
displayCartCount();
displayCartItems();
switchCurrency("mycart", displayCartItems);

