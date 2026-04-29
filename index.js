import { menuArray } from "./data.js";
const menuList = document.querySelector(".menu-list");
const checkoutList = document.querySelector(".checkout-list");
const checkoutSection = document.querySelector(".checkout-section");
const totalAmount = document.querySelector(".total-amount");
const completeOrderBtn = document.querySelector(".complete-order-btn");
const paymentModal = document.getElementById("payment-modal");
const closeModalBtn = document.querySelector(".close-modal-btn");

let orderArray = [];

// Event listener
menuList.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add-btn");
  if (addBtn) {
    const id = addBtn.dataset.add;
    addToOrder(id);
  }
});

checkoutList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-item-btn");
  if (removeBtn) {
    const index = removeBtn.dataset.index;
    removeFromOrder(index);
  }
});

completeOrderBtn.addEventListener("click", (e) => {
  paymentModal.classList.remove("hide");
});

closeModalBtn.addEventListener("click", (e) => {
  paymentModal.classList.add("hide");
});

// render menu items to the page
function renderMenu(data) {
  const menuHtml = data
    .map((menuItem) => {
      const { name, ingredients, price, image, id } = menuItem;

      return `
      <li class="item">
        <img class="item-graphic" src="${image}" alt="${name}" />
        <div class="item-info">
          <h3 class="item-title fs-title">${name}</h3>
          <p class="item-description">${ingredients.join(", ")}</p>
          <span class="item-price fs-price">$${price}</span>
        </div>
        <button
          type="button"
          class="add-btn btn-icon"
          data-add="${id}" 
          aria-label="Add ${name} to Order"
        >
          +
        </button>
      </li>`;
    })
    .join("");

  menuList.innerHTML = menuHtml;
}

// add items to order list when user clicks the add button
function addToOrder(id) {
  const menuItem = menuArray.find((item) => item.id === parseInt(id));
  if (!menuItem) {
    throw new ReferenceError(`No menu item found with ID: ${id}`);
  }
  orderArray.push({ ...menuItem });
  checkoutSection.classList.remove("hide");
  renderOrder();
}

// remove items from order list when user clicks the remove button
function removeFromOrder(index) {
  orderArray.splice(index, 1);
  renderOrder();
}

// render
function renderOrder() {
  if (orderArray.length > 0) {
    const orderHtml = orderArray
      .map((item, index) => {
        return `
        <li class="checkout-item">
          <div class="checkout-item-info">
            <span class="checkout-item-title fs-title">${item.name}</span>
            <button class="remove-item-btn text-muted" type="button" data-index="${index}">
              remove
            </button>
          </div>
          <span class="item-price fs-price">$${item.price}</span>
        </li>`;
      })
      .join("");

    checkoutList.innerHTML = orderHtml;
    calculateTotal();
  } else {
    checkoutList.innerHTML = "";
    checkoutSection.classList.add("hide");
  }
}

// calculate total price of the order
function calculateTotal() {
  const total = orderArray.reduce((sum, item) => sum + item.price, 0);
  console.log(total);
  totalAmount.textContent = `$${total}`;
  return total;
}

renderMenu(menuArray);
