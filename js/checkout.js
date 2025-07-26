const checkoutOverlayEl = document.querySelector(".checkout-overlay");
const closeBtnEl = document.querySelector(".close-btn");
const backToCrartBtnEl = document.querySelector(".back-btn");
export function checkoutProcess() {
  visibility("visible");
  closeBtnEl.addEventListener("click", visibility);
  backToCrartBtnEl.addEventListener("click", visibility);
}
function visibility(type) {
  type === "visible"
    ? checkoutOverlayEl.classList.add("visible")
    : checkoutOverlayEl.classList.remove("visible");
}
