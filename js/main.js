/*cart number*/
let cartCount = 0;
document.getElementById("cartCounter").innerText = cartCount;
document
  .getElementById("add-to-cart-button")
  .addEventListener("click", addToCart);

function addToCart() {
  cartCount++;
  document.getElementById("cartCounter").innerText = cartCount;
}

/*detail page image switch with dropdown color options*/
function updateImages() {
  const dropdown = document.getElementById("color-dropdown");
  const mainProductPicture = document.getElementById("main-product-picture");
  const detailPicture3 = document.getElementById("detail-picture-3");

  if (dropdown.value === "option2") {
    mainProductPicture.src = "photos/detail-3.jpg";
    detailPicture3.src = "photos/main-rainbow-earrings.jpg";
  } else {
    mainProductPicture.src = "photos/main-rainbow-earrings.jpg";
    detailPicture3.src = "photos/detail-3.jpg";
  }
}

/*header dropdown sidebar*/
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
};

/*earrings categories dropdown*/
function toggleCategoryDropdown() {
  const categorydropdown = document.getElementById("category-dropdown");
  categorydropdown.style.display =
    categorydropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".category-dropdown-btn")) {
    const categorydropdown = document.getElementById("category-dropdown");
    if (categorydropdown.style.display === "block") {
      categorydropdown.style.display = "none";
    }
  }
};
