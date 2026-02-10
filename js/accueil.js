const noBtn = document.getElementById("noBtn");

if (noBtn) {
  const messages = [
    "Are you sure ? 😢",
    "Why ? 🥺",
    "It's not possible 💔",
    "This button is disabled 🚫"
  ];

  let index = 0;
  let locked = false;

  const handleNo = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (locked) return;

    noBtn.textContent = messages[index];

    // déplacement UNIQUEMENT desktop
    if (window.matchMedia("(hover: hover)").matches && index < 3) {
      const x = Math.random() * 220 - 110;
      const y = Math.random() * 300 - 150;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (index === 3) {
      noBtn.style.transform = "translate(0, 0)";
      noBtn.style.cursor = "not-allowed";
      noBtn.disabled = true;
      locked = true;
    }

    index++;
  };

  noBtn.addEventListener("pointerdown", handleNo);
}
