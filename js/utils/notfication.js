const notficationEl = document.querySelector("#toast");
let timer;
export function showNotfication(type) {
  clearTimeout(timer);
  notficationEl.classList.remove("show", "warning");
  if (type === "addproduct" || type === "update") {
    notficationEl.classList.add("show");
    notficationEl.textContent =
      type === "addproduct" ? "Product added to cart!" : "Item updated";
    timer = setTimeout(() => {
      notficationEl.classList.remove("show");
    }, 3000);
  } else if (type === "NEQ" || type === "remove" || type === "checkout") {
    notficationEl.classList.add("warning");
    notficationEl.textContent =
      type === "NEQ"
        ? "Sorry, this product is currently out of stock."
        : type === "remove"
        ? "Item removed"
        : "Your cart is empty.";
    timer = setTimeout(() => {
      notficationEl.classList.remove("warning");
    }, 3000);
  }
}
