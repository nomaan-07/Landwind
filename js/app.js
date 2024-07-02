const mobileMenuToggleBtn = document.querySelector(".mobile-menu__toggle-btn");
const barsElements = document.querySelectorAll(".bar");
const overlayElem = document.querySelector(".overlay");
const mobileMenuElem = document.querySelector(".mobile-menu");
const faqQuestionElements = document.querySelectorAll(".faq__question");

const visibilityClasses = ["opacity-0", "invisible", "opacity-100", "visible"];

const mobileMenuToggle = () => {
  barsElements.forEach((bar) => bar.classList.toggle("mobile-menu__toggle-btn--open"));
  visibilityClasses.forEach((item) => overlayElem.classList.toggle(item));

  mobileMenuElem.classList.toggle("-translate-y-[380px]");
  mobileMenuElem.classList.toggle("translate-y-0");
};

const faqClose = (currentQuestionElem) => {
  faqQuestionElements.forEach((elem) => {
    if (elem !== currentQuestionElem) {
      const iconElem = elem.children[1];
      const answerElem = elem.nextElementSibling;

      elem.classList.remove("text-gray-900");
      elem.classList.add("text-gray-500");
      iconElem.classList.remove("rotate-180");
      answerElem.classList.remove("faq__answer--open");
      answerElem.classList.add("h-0");
    }
  });
};

const faqToggle = (event) => {
  const questionElem = event.currentTarget;
  const iconElem = event.currentTarget.children[1];
  const answerElem = event.currentTarget.nextElementSibling;

  faqClose(questionElem);

  questionElem.classList.toggle("text-gray-900");
  questionElem.classList.toggle("text-gray-500");
  iconElem.classList.toggle("rotate-180");
  answerElem.classList.toggle("faq__answer--open");
  answerElem.classList.toggle("h-0");
};

mobileMenuToggleBtn.addEventListener("click", mobileMenuToggle);
overlayElem.addEventListener("click", mobileMenuToggle);
faqQuestionElements.forEach((elem) => elem.addEventListener("click", faqToggle));
