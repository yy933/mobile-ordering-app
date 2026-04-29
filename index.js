import { menuArray } from "./data.js";
const menuList = document.querySelector(".menu-list");
const checkoutList = document.querySelector(".checkout-list");
const checkoutSection = document.querySelector(".checkout-section");
const totalAmount = document.querySelector(".total-amount");
const completeOrderBtn = document.querySelector(".complete-order-btn");
const paymentModal = document.getElementById("payment-modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const paymentForm = document.getElementById("payment-form");
const cardNumber = document.getElementById("card-number");
const cvv = document.getElementById("cvv");
const orderCompleteState = document.querySelector(".order-complete-state");

// save order items in an array
let orderArray = [];

// Event listener
// add items to order list when user clicks the add button
menuList.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add-btn");
  if (addBtn) {
    const id = addBtn.dataset.add;
    addToOrder(id);
  }
});

// remove items from order list when user clicks the remove button
checkoutList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".remove-item-btn");
  if (removeBtn) {
    const index = removeBtn.dataset.index;
    removeFromOrder(index);
  }
});

// show payment modal when user clicks the complete order button
completeOrderBtn.addEventListener("click", () => {
  paymentModal.classList.remove("hide");
});

// hide payment modal when user clicks the close button
closeModalBtn.addEventListener("click", () => {
  paymentModal.classList.add("hide");
});

// after user submits the payment form, hide the payment modal and show the order complete state
paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitPaymentForm();
});

// restrict card number input to numeric values only and limit to 16 digits, then focus CVV input when card number is complete
cardNumber.addEventListener("input", (e) => {
  handleNumericInput(e, 16);
  if (e.target.value.length === 16) {
    cvv.focus();
  }
});
cvv.addEventListener("input", (e) => handleNumericInput(e, 3));

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
  // hide order complete state if user adds more items after completing an order
  orderCompleteState.classList.add("hide");

  // get the menu item
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

// submit payment form
function submitPaymentForm() {
  // get card details input values
  const paymentFormData = new FormData(paymentForm);
  const userName = paymentFormData.get("name");

  // hide payment modal and checkout section
  paymentModal.classList.add("hide");
  checkoutSection.classList.add("hide");

  // clear the order array for a new order
  orderArray = [];

  // render order complete state with user's name
  orderCompleteState.innerHTML = `
    <div role="status" aria-live="polite">
      <h2 class="fs-title">Thanks, ${userName}! Your order is on its way.</h2>
    </div>`;
  orderCompleteState.classList.remove("hide");

  // reset the payment form
  paymentForm.reset();
}

// restrict card number and CVV inputs to numeric values only and limit
const handleNumericInput = (e, limit) => {
  // restrict input to numeric values only 
  let value = e.target.value.replace(/\D/g, "");

  // restrict input length to the specified limit
  if (value.length > limit) {
    value = value.slice(0, limit);
  }

  e.target.value = value;
};



renderMenu(menuArray);
