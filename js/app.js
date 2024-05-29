const mobileMenuToggleBtn = document.querySelector(".mobile-menu__toggle-btn");
const barsElements = document.querySelectorAll(".bar");

function mobileMenuToggle() {
  this.classList.toggle("bars-3--open");
  barsElements.forEach((bar) => bar.classList.toggle("mobile-menu__toggle-btn--open"));
}

mobileMenuToggleBtn.addEventListener("click", mobileMenuToggle);
