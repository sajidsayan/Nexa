const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });

  mobileNav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
