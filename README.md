## Mobile Ordering App

A sleek, responsive mobile-first web application for a local diner. Users can browse the menu, manage a real-time shopping cart, apply automated discounts, and complete a simulated checkout process.

**Live Demo**: https://jimmysdinerorderingapp.netlify.app/

## Features

- **Dynamic Menu Rendering**: Menu items are generated dynamically from a data module, making it easy to update prices or descriptions in one place.

- **Real-time Order Management**: Users can add multiple items and remove specific ones from their cart. The UI updates instantly.
- **Smart Combo Discount:**
  - Automatically detects if an order contains Beer and at least one other item.
  - Applies a $2 discount and notifies the user via the UI.

- **Intuitive Checkout Flow:**
  - Auto-Focus: After entering 16 digits for the card number, the cursor automatically jumps to the CVV field.
  - Input Validation: Restricts card and CVV inputs to numeric values only to prevent user error.

- **Responsive & Modern UI**:
  - Mobile-First Design: Optimized for touch targets and small screens.
  - Adaptive Desktop Layout: Switches to a sophisticated dual-column view on larger screens to maximize space.
  - Refined Alignment: Ensures consistent padding and vertical alignment across all device sizes.
- **Accessibility (A11y)**: Built with semantic HTML, ARIA labels, and live regions to ensure a great experience for screen reader users.

## Tech Stack

- Frontend: HTML5, CSS3
  - Advanced Layout: CSS Flexbox and clamp() functions for fluid typography and scaling.
  - RWD Strategy: Media queries for seamless transition between mobile and desktop views.
- Scripting: JavaScript (ES6+)
  - ES Modules: Modular code structure using import/export.
  - Event Delegation: Optimized event handling for dynamic elements.
  - Functional Programming: Utilizes `.map()`, `.filter()`, and `.reduce()` for clean and efficient state management.

## File Structure

```
├── index.html      # Page structure and accessibility features
├── style.css       # Custom component styling, RWD logic, and animations
├── index.js        # App logic, state management, and DOM manipulation
├── data.js         # Menu data array (source of truth)
└── images/         # High-quality assets for food items
```

## Getting Started

### 1. Clone the repository:

```
git clone https://github.com/yy933/mobile-ordering-app.git
```

### 2. Local Development:

Since this project uses **JavaScript Modules**, you must serve it through a local server to avoid CORS issues.

- If using VS Code, right-click `index.html` and select **"Open with Live Server"**.
- Alternatively, use Python:` python -m http.server 8000`
