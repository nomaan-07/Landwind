const mobileMenuToggleBtn = document.querySelector(".mobile-menu__toggle-btn");
const barsElements = document.querySelectorAll(".bar");

const mobileMenuToggle = () => {
  barsElements.forEach((bar) => bar.classList.toggle("mobile-menu__toggle-btn--open"));
};

mobileMenuToggleBtn.addEventListener("click", mobileMenuToggle);
