document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".person-card");

  cards.forEach(function (card) {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-expanded", "false");

    function getName() {
      var h = card.querySelector("h3");
      return h ? h.textContent.trim() : "Partner";
    }

    function updateAria() {
      var expanded = card.classList.contains("expanded");
      card.setAttribute("aria-expanded", expanded ? "true" : "false");
      card.setAttribute(
        "aria-label",
        expanded ? "Collapse bio for " + getName() : "Expand bio for " + getName()
      );
    }

    updateAria();

    function toggle() {
      var open = card.classList.contains("expanded");
      cards.forEach(function (c) {
        c.classList.remove("expanded");
        c.setAttribute("aria-expanded", "false");
        c.setAttribute(
          "aria-label",
          "Expand bio for " + (c.querySelector("h3") ? c.querySelector("h3").textContent.trim() : "Partner")
        );
      });
      if (!open) {
        card.classList.add("expanded");
        card.setAttribute("aria-expanded", "true");
        card.setAttribute("aria-label", "Collapse bio for " + getName());
      }
    }

    card.addEventListener("click", toggle);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
});
