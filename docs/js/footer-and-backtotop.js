document.addEventListener("DOMContentLoaded", function () {
  var main = document.querySelector(".md-main");
  if (!main) return;

  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="site-footer__inner">' +
    '<p class="site-footer__copy">&copy; ' +
    new Date().getFullYear() +
    " Simha &amp; Sarwa Associates. All rights reserved.</p>" +
    '<p class="site-footer__disclaimer">The information on this website is for general informational purposes only and does not constitute legal advice.</p>' +
    '<p class="site-footer__link"><a href="contact.html">Contact</a></p>' +
    "</div>";
  main.parentNode.insertBefore(footer, main.nextSibling);

  var backTop = document.createElement("button");
  backTop.type = "button";
  backTop.className = "back-to-top";
  backTop.setAttribute("aria-label", "Back to top");
  backTop.textContent = "\u2191";
  backTop.style.display = "none";

  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function onScroll() {
    backTop.style.display = window.scrollY > 400 ? "flex" : "none";
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.body.appendChild(backTop);
});
