const noBtn = document.getElementById("noBtn");

const messages = [
    "Are you sure ? 😢",
    "Why ? 🥺",
    "It's not possible 💔",
    "This button is disabled 🚫"
];

let hoverCount = 0;
let locked = false;

noBtn.addEventListener("mouseover", () => {
    if (locked) return;

    noBtn.textContent = messages[hoverCount];

    if (hoverCount < 3) {
      // déplacement temporaire sans casser le layout
      const x = Math.random() * 220 - 110;
      const y = Math.random() * 400 - 200;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      // dernier message : retour à la position d'origine
      noBtn.style.transform = "translate(0, 0)";
      noBtn.style.cursor = "not-allowed";
      locked = true;
    }

    if (hoverCount == 3) {
        noBtn.disabled = true;
    }

    hoverCount++;
  });
  