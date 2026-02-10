const noBtn = document.getElementById("noBtn");

if (noBtn) {
  const messages = [
    "Are you sure ? 😢",
    "Why ? 🥺",
    "It's not possible 💔",
    "This button is disabled 🚫"
  ];

  let hoverCount = 0;
  let locked = false;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const handleNoInteraction = () => {
    if (locked) return;

    noBtn.textContent = messages[hoverCount];

    if (hoverCount < 3) {
      // déplacement PLUS LÉGER sur mobile
      const maxX = isMobile ? 220 : 110;
      const maxY = isMobile ? 400 : 200;

      const x = Math.random() * (maxX * 2) - maxX;
      const y = Math.random() * (maxY * 2) - maxY;

      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      noBtn.style.transform = "translate(0, 0)";
      noBtn.style.cursor = "not-allowed";
      noBtn.disabled = true;
      locked = true;
    }

    hoverCount++;
  };

  if (isMobile) {
    // 📱 Mobile → tap
    noBtn.addEventListener("click", handleNoInteraction);
  } else {
    // 🖱️ Desktop → hover
    noBtn.addEventListener("mouseover", handleNoInteraction);
  }
}
