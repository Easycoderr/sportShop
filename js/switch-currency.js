import { getData } from "./utils/request.js";
const currencyBtn = document.querySelectorAll(".currency-btn");
export async function switchCurrency(page, callback) {
  const data = await getData();
  if (page === "updatemycart") {
    currencyBtn.forEach((element) => {
      if (element.classList.contains("active")) {
        callback(data.value, element.dataset.currency);
      }
    });
  } else {
    currencyBtn.forEach((element) => {
      element.addEventListener("click", (e) => {
        currencyBtn.forEach((e) => e.classList.remove("active"));
        e.target.classList.add("active");
        if (page === "product") {
          callback(undefined, data.value, e.target.dataset.currency);
        } else if (page === "mycart") {
          callback(data.value, e.target.dataset.currency);
        }
      });
    });
  }
}
