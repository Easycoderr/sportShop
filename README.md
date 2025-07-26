# sportShop

A clean, responsive **sportShop** Shopping Cart UI prototype for a sporting goods store, using **online image assets** to streamline deployment.

---

## 🚀 Live Demo

*Open via GitHub Pages once deployed:*
[https://easycoderr.github.io/sportShop/](https://easycoderr.github.io/sportShop/)

---

## 🎯 Features

* **Product Listing**
  Responsive grid of products (image, name, price, “Add to Cart” button). Images are loaded via external URLs.
* **Shopping Cart**
  Separate `mycart.html` page shows items, quantity controls, item totals, and grand total.
* **Persistence**
  Cart contents saved in `localStorage` across pages & reloads.
* **Sort & Filter**
  Sort products by price or name; switch currency (USD/EUR).
* **Mobile‑First & Responsive**
  Fluid layouts using CSS Grid and Flexbox for all screen sizes.
* **UI/UX Touches**
  Burger menu on mobile, toast notifications, hover effects, and subtle animations.

---

## 📂 Folder Structure

```
/ (project root)
│
├── index.html               # Main shop page (Home)
├── products.html            # Product listing page
├── mycart.html              # Shopping cart page
│
├── css/
│   ├── landing-style.css    # Home/landing page styles
│   ├── product-list-style.css
│   ├── nav-style.css
│   ├── notification-style.css
│   └── mycart-style.css
│
├── js/
│   ├── burger-menu.js
│   ├── slider.js
│   ├── products-data.js
│   ├── products.js
│   ├── sort-product.js
│   ├── switch-currency.js
│   ├── my-cart-data.js
│   ├── my-cart.js
│   ├── checkout.js
│   ├── order-summary.js
│   └── utils/
│       ├── currencyExchange.js
│       ├── notification.js
│       └── request.js
```

> **Note:** Product images are loaded from online URLs defined in `products-data.js`, so there is no local `images/` folder.

---

## 💻 Installation & Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/easycoderr/sportShop.git
   cd sportShop
   ```
2. **Open** any of the `.html` files in your browser (e.g. `index.html`).
3. **Interact** with the UI:

   * Add items to cart → they persist in `localStorage`
   * Navigate to “My Cart” → adjust quantities or remove items
   * Sort products or switch currency
4. **Deploy** via GitHub Pages:

   * Go to **Settings → Pages** → enable from `main` branch, `/ (root)` folder.

---

## 🛠 Built With

* **HTML5** & **CSS3** (Grid, Flexbox)
* **JavaScript (ES6+)**
* **LocalStorage API** for persistence
* **Font Awesome** for icons

---

## ✅ Future Enhancements

* Set up a backend (Node.js/Express) to handle orders and hide API keys
* Add search and filter by category
* User authentication & order history
* Optimize assets (minify CSS/JS) & implement lazy‑loading

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes and commit (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please ensure your code follows existing style and includes relevant documentation.

---

## 📄 License

This project is **MIT‑licensed** — see [LICENSE](LICENSE) for details.

---

© 2025 Your Name · [GitHub](https://github.com/easycoderr)
