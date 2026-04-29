## Mobile Ordering App
A sleek, responsive mobile-first web application for a local diner. Users can browse the menu, manage a real-time shopping cart, apply automated discounts, and complete a simulated checkout process.

## Features
- **Dynamic Menu Rendering**: Menu items are generated dynamically from a data module, making it easy to update prices or descriptions in one place.

- **Real-time Order Management**: Users can add multiple items and remove specific ones from their cart. The UI updates instantly.
- **Smart Combo Discount:**
  - Automatically detects if an order contains Beer and at least one other item.
  - Applies a $2 discount and notifies the user via the UI.

- **Intuitive Checkout Flow:**
  - Auto-Focus: After entering 16 digits for the card number, the cursor automatically jumps to the CVV field.
  - Input Validation: Restricts card and CVV inputs to numeric values only to prevent user error.

- **Interactive UI**: Includes a payment modal and a personalized "Order Complete" state that greets the user by name.
- **Accessibility (A11y)**: Built with semantic HTML, ARIA labels, and live regions to ensure a great experience for screen reader users.

## Tech Stack
- Frontend: HTML5, CSS3 (Flexbox, Custom Typography)
- Scripting: JavaScript (ES6+)
  - ES Modules: Modular code structure using import/export.
  - Event Delegation: Optimized event handling for dynamic elements.
  - Data Processing: Utilizes `.map()`, `.filter()`, and `.reduce()` for state management.

## File Structure

```
├── index.html      # Page structure and accessibility features
├── style.css       # Custom component styling and layout
├── index.js        # App logic, state management, and DOM manipulation
├── data.js         # Menu data array (source of truth)
└── images/         # High-quality assets for food items
```

## Getting Started

### 1. Clone the repository:

```
git clone https://github.com/yy933/mobile-ordering-app.git
```

### 2. Open the project:
Since this project uses **JavaScript Modules**, you must serve it through a local server to avoid CORS issues.

- If using VS Code, right-click `index.html` and select **"Open with Live Server"**.
- Alternatively, use Python:` python -m http.server 8000`

