document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".person-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const open = card.classList.contains("expanded");

      cards.forEach(c => c.classList.remove("expanded"));

      if (!open) {
        card.classList.add("expanded");
      }
    });
  });
});
