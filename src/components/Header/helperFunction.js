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

export { headerSlide };
