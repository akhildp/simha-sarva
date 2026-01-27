document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("bciAccepted")) return;

  document.body.style.overflow = "hidden";

  const html = `
    <div id="bci-disclaimer-overlay">
      <div class="bci-disclaimer-box">
        <h2>Disclaimer</h2>
        <p>
          As per the rules of the Bar Council of India, lawyers are not permitted
          to solicit work or advertise in any manner.
        </p>
        <p>
          The information on this website is provided for general informational
          purposes only and does not constitute legal advice.
        </p>
        <p>
          No attorney-client relationship is created by accessing this website.
        </p>
        <button id="bci-agree-btn">I Agree</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  document.getElementById("bci-agree-btn").addEventListener("click", function () {
    sessionStorage.setItem("bciAccepted", "true");
    document.body.style.overflow = "";
    document.getElementById("bci-disclaimer-overlay").remove();
  });
});
