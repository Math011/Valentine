// ===== RÉCUPÉRATION DES ÉLÉMENTS =====
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");
const buttons = document.getElementById("buttons");

// ===== CONFETTIS =====
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // emoji aléatoire
    confetti.textContent = Math.random() > 0.5 ? "💖" : "🎉";

    // position aléatoire
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    // suppression après animation
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// ===== CLIC SUR YES =====
yesBtn.addEventListener("click", () => {
  // lancer les confettis
  launchConfetti();

  // changer le texte de la question
  questionText.textContent = "I wish us a happy Valentine's day on this 14 februaary 2026 💕";

  // remplacer les boutons par le message final + cœurs
  buttons.innerHTML = `
    <div class="final-message" style="position: relative; margin-top: 2rem;">
  
      <p style="font-size: 1.5rem;">
        Let's make the most of our meal in the Näsinneula tower 🍴
        <br>
        A gift will be waiting for you when you return home 🎁
      </p>
    </div>
  `;
});