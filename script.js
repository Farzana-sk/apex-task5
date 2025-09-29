let cart = [];
let total = 0;

// Add to Cart
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

// Remove item
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// Toggle Cart Sidebar
function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("active");
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your purchase!");
  cart = [];
  total = 0;
  updateCart();
  toggleCart();
}

// Search Products
function searchProducts() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
