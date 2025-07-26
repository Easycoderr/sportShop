import { getData } from "./utils/request.js";
export async function switchCurrency(page, callback) {
  const data = await getData();
  const currencyBtn = document.querySelectorAll(".currency-btn");
  currencyBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      currencyBtn.forEach((e) => e.classList.remove("active"));
      e.target.classList.add("active");
      if (page === "product") {
        callback(undefined, data.value, e.target.dataset.currency);
      } else if (page === "mycart") {
        callback(undefined, data.value, e.target.dataset.currency);
      }
    });
  });
}
