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

/*=======  Managing Products Of The Products Section ========*/
// Data of our products
const products = [
  {
    id: 1,
    imageUrl: "./assets/products/black-marquina.jpg",
    name: "Black Marquina",
    url: `pages/product-details.html?id=1`,
  },
  {
    id: 2,
    imageUrl: "./assets/products/brown-onyx.jpg",
    name: "Brown Onyx",
    url: `pages/product-details.html?id=2`,
  },
  {
    id: 3,
    imageUrl: "./assets/products/armani-grey.jpg",
    name: "Armani Grey",
    url: `pages/product-details.html?id=3`,
  },
  {
    id: 4,
    imageUrl: "./assets/products/blue-azul.jpg",
    name: "Blue Azul",
    url: `pages/product-details.html?id=4`,
  },
  {
    id: 5,
    imageUrl: "./assets/products/bala-flower.jpg",
    name: "Bala Flower(s)",
    url: `pages/product-details.html?id=5`,
  },
  {
    id: 6,
    imageUrl: "./assets/products/bottochino-classico.jpg",
    name: "Bottochino Classico",
    url: `pages/product-details.html?id=6`,
  },
];

// Creat the product element based on data recieved from proucts object
function createProductItem(product) {
  const stoneItem = document.createElement("div");
  stoneItem.classList.add("stone-item");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const bgImg = document.createElement("div");
  bgImg.classList.add("bg-img");
  bgImg.style.background = `url(${product.imageUrl}) no-repeat center center`;

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.name;

  const stoneName = document.createElement("h3");
  stoneName.textContent = product.name;

  // Add elements to the structure
  imageContainer.appendChild(bgImg);
  imageContainer.appendChild(image);

  // Add click event listener for product navigation
  stoneItem.addEventListener("click", () => {
    window.location.href = product.url;
  });

  stoneItem.appendChild(imageContainer);
  stoneItem.appendChild(stoneName);

  return stoneItem;
}

const productList = document.getElementById("productList");
products.forEach((product) => {
  const productItem = createProductItem(product);
  productList.appendChild(productItem);
});

// Handling Products carousel (on medium and large screens) left and right button
const list = document.getElementById("productList");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const itemWidth = 196;
const padding = 10;

prev.addEventListener("click", () => {
  list.scrollLeft -= itemWidth + padding;
});
next.addEventListener("click", () => {
  list.scrollLeft += itemWidth + padding;
});
