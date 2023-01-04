const hamburger = document.querySelector(".hamburger");
const navbarList = document.querySelector(".navbar-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarList.classList.toggle("active");
});
