import { myCart } from "./my-cart-data.js";
import { convertUSDtoIQD } from "./utils/currencyExchange.js";
import { checkoutProcess } from "./checkout.js";
import { showNotfication } from "./utils/notfication.js";
const checkoutBtnEl = document.querySelector(".btn-checkout");
export function orderSummary(currencyType = "usd", currency) {
  let htmlDOM = "";
  let subtotal = myCart.reduce((a, b) => a + b.Quantity * b.price, 0);
  let shipping = subtotal > 50 ? 9.99 : 0;
  let tax = subtotal * 0.08;
  let total = subtotal + shipping + tax;
  if (currencyType === "iqd") {
    subtotal = convertUSDtoIQD(subtotal, currency);
    shipping = convertUSDtoIQD(shipping, currency);
    tax = convertUSDtoIQD(tax, currency);
    total = convertUSDtoIQD(total, currency);
  } else {
    subtotal = `$${subtotal.toFixed(2)}`;
    shipping = `$${shipping.toFixed(2)}`;
    tax = `$${tax.toFixed(2)}`;
    total = `$${total.toFixed(2)}`;
  }
  htmlDOM += `
    <div class="summary-item" id="subtotal">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div class="summary-item" id="shipping">
                <span>Shipping:</span>
                <span>${shipping}</span>
              </div>
              <div class="summary-item" id="tax">
                <span>Tax:</span>
                <span>${tax}</span>
              </div>

              <div class="summary-item summary-total" id="total">
                <span>Grand Total:</span>
                <span>${total}</span>
              </div>
    
    `;
  checkoutBtnEl.addEventListener("click", () => {
    myCart.length > 0 ? checkoutProcess() : showNotfication("checkout");
  });

  return htmlDOM;
}
