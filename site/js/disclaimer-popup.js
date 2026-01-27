document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("bciAccepted")) return;

  document.body.style.overflow = "hidden";

  fetch("/partials/disclaimer.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);

      document
  .getElementById("bci-agree-btn")
  .addEventListener("click", function () {
    sessionStorage.setItem("bciAccepted", "true");
    document.body.style.overflow = "";
    document.getElementById("bci-disclaimer-overlay").remove();

    window.location.href = "/content/";
  });
    });
});