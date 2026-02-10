const noBtn = document.getElementById("noBtn");

if (noBtn) {
  const messages = [
    "Are you sure ? 😢",
    "Why ? 🥺",
    "It's not possible 💔",
    "This button is disabled 🚫"
  ];

  let count = 0;
  let locked = false;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const handleNo = () => {
    if (locked) return;

    noBtn.textContent = messages[count];

    if (!isMobile && count < 3) {
      // 🖱️ Desktop → le bouton fuit
      const x = Math.random() * 220 - 110;
      const y = Math.random() * 400 - 200;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (count === 3) {
      noBtn.style.transform = "translate(0, 0)";
      noBtn.disabled = true;
      noBtn.style.cursor = "not-allowed";
      locked = true;
    }

    count++;
  };

  if (isMobile) {
    // 📱 Mobile → TAP UNIQUEMENT
    noBtn.addEventListener("touchstart", (e) => {
      e.preventDefault(); // 🔑 empêche le blocage
      handleNo();
    });
  } else {
    // 🖱️ Desktop → hover
    noBtn.addEventListener("mouseover", handleNo);
  }
}
