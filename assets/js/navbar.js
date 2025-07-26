let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll ke bawah
    navbar.classList.add("-translate-y-full");
  } else {
    // Scroll ke atas
    navbar.classList.remove("-translate-y-full");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
