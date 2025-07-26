const cartCountEl = document.querySelector(".cart-count");
export const myCart = getMyCartsFromLocalStorage() || [];
export function saveMyCartsToLocalStorage(newCart) {
  localStorage.setItem("myCart", JSON.stringify(newCart));
}
export function getMyCartsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("myCart"));
}
export function displayCartCount() {
  if (myCart.length > 0) {
    const NoOfCart = myCart.length;
    cartCountEl.classList.add("visible");
    cartCountEl.innerHTML = NoOfCart;
  } else {
    cartCountEl.classList.remove("visible");
  }
}
