import { getData } from "./utils/request.js";
import { sortProduct } from "./sort-product.js";
const currencyBtn = document.querySelectorAll(".currency-btn");

async function setIqdPriceInLocalStorage() {
  const data = await getData();
  localStorage.setItem("IQD", JSON.stringify(data.value));
}
setIqdPriceInLocalStorage();
function getIqdPriceFromLocalStorage() {
  return JSON.parse(localStorage.getItem("IQD"));
}
function switchCurrency(page, callback) {
  const IQD = getIqdPriceFromLocalStorage();
  if (page === "updatemycart") {
    currencyBtn.forEach((element) => {
      if (element.classList.contains("active")) {
        console.log(element.dataset.currency);
        callback(IQD);
      }
    });
  } else {
    currencyBtn.forEach((element) => {
      element.addEventListener("click", (e) => {
        currencyBtn.forEach((e) => e.classList.remove("active"));
        e.target.classList.add("active");
        if (page === "product") {
          callback(undefined, IQD, e.target.dataset.currency);
          sortProduct(callback);
        } else if (page === "mycart") {
          callback(IQD, e.target.dataset.currency);
        }
      });
    });
  }
}

export { switchCurrency };
