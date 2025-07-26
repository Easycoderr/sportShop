import { displayCartCount } from "./my-cart-data.js";
// Burger menu toggle functionality
document.getElementById("burgerMenu").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const burgerMenu = document.getElementById("burgerMenu");

  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(event.target) &&
    !burgerMenu.contains(event.target)
  ) {
    navMenu.classList.remove("active");
  }
});
displayCartCount();
