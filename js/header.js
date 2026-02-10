const menuLinks = document.querySelectorAll(".menu");
const currentPath = window.location.pathname;

menuLinks.forEach(link => {
  const linkPath = link.getAttribute("href");

  if (currentPath === linkPath) {
    link.classList.add("active");
  }
});