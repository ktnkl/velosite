const menu = document.querySelector(".mobile-nav-links");
const button = document.querySelector(".mobile-nav__button");

button.addEventListener("click", () => {
  menu.classList.toggle("mobile-nav-links_invisible")
})