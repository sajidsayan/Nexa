// Make sure you have these elements in your HTML:
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

if (hamburger && mobileNav) {
  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click bubbling to document
    mobileNav.classList.toggle("show");
  });

  // Click anywhere outside to close mobile nav
  document.addEventListener("click", () => {
    if (mobileNav.classList.contains("show")) {
      mobileNav.classList.remove("show");
    }
  });

  // Prevent clicks inside mobile nav from closing it
  mobileNav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}


