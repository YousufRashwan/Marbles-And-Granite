// Adding shadow to the header when scrolling down
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (this.scrollY > 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
});

// Check if menu is showed or closed
const menu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navLink");
function showMenu(showMenu) {
  showMenu
    ? menu.classList.add("show-menu")
    : menu.classList.remove("show-menu");
}
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => showMenu(false));
});

/*=======  Managing Products And Single-Product Pages ========*/
// Data of our products
const products = [
  {
    id: 1,
    imageUrl: "./assets/products/black-marquina.jpg",
    name: "Black Marquina",
  },
  {
    id: 2,
    imageUrl: "./assets/products/brown-onyx.jpg",
    name: "Brown Onyx",
  },
  {
    id: 3,
    imageUrl: "./assets/products/armani-grey.jpg",
    name: "Armani Grey",
  },
  {
    id: 4,
    imageUrl: "./assets/products/blue-azul.jpg",
    name: "Blue Azul",
  },
  {
    id: 5,
    imageUrl: "./assets/products/bala-flower.jpg",
    name: "Bala Flower(s)",
  },
  {
    id: 6,
    imageUrl: "./assets/products/bottochino-classico.jpg",
    name: "Bottochino Classico",
  },
];

// Get the id of the proudct from the url; to show the product with that specific id in the single-product page
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Fetch product data based on the id (replace with your logic)
const productData = getProductData(productId);

if (productData) {
  // Display product details using the fetched data (name, description, image, etc.)
  document.getElementById("product-name").textContent = productData.name;
  document.getElementById("product-img").src = productData.imageUrl;
  // ... and so on
} else {
  document.write("Product not found!");
}

function getProductData(id) {
  const product = products.find((product) => product.id == id);
  return product;
}
