const navMenu = document.querySelector(".mobile-nav-menu");

const header = document.querySelector(".header");

const toggleNavbar = () => {
  header.classList.toggle("active");
};

navMenu.addEventListener("click", () => toggleNavbar());
