import { products } from "./products-data.js";
const filterSelectEl = document.querySelector(".filter-select");
const newProducts = new Array(...products);
const currencyBtn = document.querySelectorAll(".currency-btn");
let currencyType;
export function sortProduct(callBack) {
  currencyBtn.forEach((e) => {
    if (e.classList.contains("active")) {
      currencyType = e.dataset.currency;
    }
  });
  const selected = filterSelectEl.value;
  switch (selected) {
    case "price-low":
      newProducts.sort((a, b) => a.price - b.price);
      callBack(newProducts, undefined, currencyType);
      break;
    case "price-high":
      newProducts.sort((a, b) => b.price - a.price);
      callBack(newProducts, undefined, currencyType);
      break;
    case "name-asc":
      newProducts.sort((a, b) => a.name.localeCompare(b.name));
      callBack(newProducts, undefined, currencyType);
      break;
    case "name-desc":
      newProducts.sort((a, b) => b.name.localeCompare(a.name));
      callBack(newProducts, undefined, currencyType);
      break;
    default:
      callBack(undefined, undefined, currencyType);
  }
}
