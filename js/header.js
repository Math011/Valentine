const menuLinks = document.querySelectorAll(".menu");

// nom du fichier courant (ex: index.html ou profile.html)
const currentPage = window.location.pathname.split("/").pop() || "index.html";

menuLinks.forEach(link => {
  const linkHref = link.getAttribute("href");

  // récupérer le nom du fichier du lien
  const linkPage = linkHref.split("/").pop();

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});