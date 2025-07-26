import { products } from "./products-data.js";
const newProducts = new Array(...products);
export function sortProduct(e, callBack) {
  e.addEventListener("click", () => {
    const selected = e.value;
    if (selected === "price-low") {
      newProducts.sort((a, b) => a.price - b.price);
      callBack(newProducts);
    } else if (selected === "price-high") {
      newProducts.sort((a, b) => b.price - a.price);
      callBack(newProducts);
    } else if (selected === "name-asc") {
      newProducts.sort((a, b) => a.name.localeCompare(b.name));
      callBack(newProducts);
    } else if (selected === "name-desc") {
      newProducts.sort((a, b) => b.name.localeCompare(a.name));
      callBack(newProducts);
    } else {
      callBack(products);
    }
  });
}
