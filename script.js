const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
const mobileLinks = document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});
