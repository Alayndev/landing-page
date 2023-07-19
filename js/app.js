const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile_nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("show_mobile_menu");
});
