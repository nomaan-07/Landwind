const mobileMenuToggleBtn = document.querySelector(".mobile-menu__toggle-btn");
const barsElements = document.querySelectorAll(".bar");
const overlayElem = document.querySelector(".overlay");
const mobileMenuElem = document.querySelector(".mobile-menu");

const visibilityClasses = ["opacity-0", "invisible", "opacity-1", "visible"];
const mobileMenuToggle = () => {
  barsElements.forEach((bar) => bar.classList.toggle("mobile-menu__toggle-btn--open"));
  visibilityClasses.forEach((item) => overlayElem.classList.toggle(item));
  mobileMenuElem.classList.toggle("-translate-y-[380px]");
  mobileMenuElem.classList.toggle("translate-y-0");
};

mobileMenuToggleBtn.addEventListener("click", mobileMenuToggle);
overlayElem.addEventListener("click", mobileMenuToggle);
