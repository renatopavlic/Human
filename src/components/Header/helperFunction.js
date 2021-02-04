const headerSlide = () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__list");
  burger.addEventListener("click", () => {
    // Toggle Navbar
    nav.classList.toggle("header__active");

   // Burger Animation
   burger.classList.toggle("toggle");
  });
}

const headerDropdown = () => {
  const arrow = document.querySelector(".header__arrowDropdown");
  const dropdown = document.querySelector(".header__dropdown");

  arrow.addEventListener("mouseover", () => {
    dropdown.classList.toggle("dropdown__active");
  })
}

export { headerSlide, headerDropdown };
