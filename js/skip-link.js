document.addEventListener("DOMContentLoaded", function () {
  var main = document.querySelector(".md-main__inner");
  if (main && !main.id) {
    main.id = "main-content";
  }

  var skip = document.createElement("a");
  skip.href = "#main-content";
  skip.className = "skip-link";
  skip.textContent = "Skip to main content";
  skip.addEventListener("click", function (e) {
    var target = document.getElementById("main-content");
    if (target) {
      e.preventDefault();
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.body.insertAdjacentElement("afterbegin", skip);
});
