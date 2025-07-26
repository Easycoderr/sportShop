const products = getToLocalStorage() || [
  {
    id: "p001",
    name: "Football - Ball",
    price: 20.0,
    image:
      "https://static.vecteezy.com/system/resources/previews/011/421/474/non_2x/soccer-ball-realistic-png.png",
    Quantity: 11,
  },
  {
    id: "p002",
    name: "Basketball - Ball",
    price: 25.0,
    image:
      "https://static.vecteezy.com/system/resources/previews/025/279/140/non_2x/basket-ball-out-door-game-png.png",
    Quantity: 10,
  },
  {
    id: "p003",
    name: "Tennis Racket",
    price: 35.0,
    image:
      "https://images.vexels.com/media/users/3/322836/isolated/preview/e56c85aaf4aee6c1e4b0e513dbc91b67-black-tennis-racket.png",
    Quantity: 10,
  },
  {
    id: "p004",
    name: "Running Shoes",
    price: 60.0,
    image:
      "https://static.vecteezy.com/system/resources/previews/048/041/696/non_2x/blue-running-shoes-on-transparent-background-free-png.png",
    Quantity: 15,
  },
  {
    id: "p005",
    name: "Tennis Ball",
    price: 10.0,
    image: "https://www.freeiconspng.com/uploads/tennis-ball-2-png-20.png",
    Quantity: 20,
  },
  {
    id: "p006",
    name: "Rogue Dumbbell",
    price: 15.0,
    image:
      "https://png.pngtree.com/png-vector/20250423/ourmid/pngtree-gym-fitness-instrument-red-and-black-dumbbell-png-image_16077969.png", // download and rename
    Quantity: 8,
  },
  {
    id: "p00",
    name: "Basketball - Shoes",
    price: 19.0,
    image:
      "https://static.vecteezy.com/system/resources/previews/043/345/024/non_2x/unmatched-design-in-basketball-footgear-on-transparent-background-png.png", // download and rename
    Quantity: 5,
  },
];

function setToLocalStorage(newProducts) {
  localStorage.setItem("products", JSON.stringify(newProducts));
}
function getToLocalStorage() {
  return JSON.parse(localStorage.getItem("products"));
}
export { products, setToLocalStorage, getToLocalStorage };
