document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("bciAccepted")) return;

  document.body.style.overflow = "hidden";

  const html = `
 <div id="bci-disclaimer-overlay">
  <div class="bci-disclaimer-box">

    <h2>Disclaimer & Confirmation</h2>

    <p>
      The user visiting this website (www.simhasarwa.com) acknowledges and confirms that they are seeking information about Simha & Sarwa Associates of their own accord and volition. By clicking the "I Agree" button below, the user expressly acknowledges the following:
    <br>
    <br>
      Under the rules of the Bar Council of India, Simha & Sarwa Associates (the "Firm") is strictly prohibited from soliciting work or advertising in any form or manner. The user acknowledges that there has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from the Firm or any of its members to solicit any work through this website.
    <br>
    <br>
      The content provided on this website is intended solely for informational purposes to provide the user with a basic understanding of the Firm’s practice areas and the professional backgrounds of its partners. It should not be interpreted as legal advice or a legal opinion on any specific set of facts or circumstances.
    <br>
    <br>
      The transmission, receipt, or use of this website does not intend to create, nor does it constitute, an attorney-client relationship between Simha & Sarwa Associates and the user. No formal relationship is established until a specific engagement letter or professional agreement has been voluntarily entered into and signed by both parties. Contacting the Firm via the website’s contact forms, email, or telephone does not automatically create a representing-lawyer relationship.
    <br>
    <br>
      While the Firm endeavors to ensure the information on this website is accurate and current, legal standards and regulations are subject to frequent change. Simha & Sarwa Associates does not warrant that the information contained on this website is accurate, complete, or up-to-date. The Firm expressly disclaims all liability for any consequences or actions taken by the user based on the material or information provided herein. Users are strongly advised to seek independent legal counsel licensed in their respective jurisdictions before acting on any information found on this site.
    <br>
    <br>
      This website may contain links to external websites or resources for the user’s convenience. Simha & Sarwa Associates does not endorse, affiliate with, or take responsibility for the content, accuracy, or reliability of any third-party websites. Accessing such links is entirely at the user’s own discretion and risk.
    <br>
    <br>
     Users are cautioned against using the communication platforms provided on this website (such as contact forms) for the exchange of confidential, business-sensitive, or politically sensitive information. The Firm cannot guarantee the absolute security of information transmitted via the website and maintains that all sensitive discussions should be conducted through secure, private professional channels.
    <br>
    <br>
      The entire content of this website, including but not limited to text, graphics, logos, and professional biographies, is the intellectual property of Simha & Sarwa Associates. No part of this website may be reproduced, distributed, or modified in any form without the express written consent of the Firm.
    </p>

    <div class="disclaimer-actions">
      <button id="bci-agree-btn">I Agree</button>
      <button type="button" class="exit-link">Disagree / Exit</button>
    </div>

  </div>
</div>

  `;

  document.body.insertAdjacentHTML("beforeend", html);

  document.getElementById("bci-agree-btn").addEventListener("click", function () {
  sessionStorage.setItem("bciAccepted", "true");

  const overlay = document.getElementById("bci-disclaimer-overlay");
  overlay.classList.add("fade-out");

  document.body.style.overflow = "";

  setTimeout(() => {
    overlay.remove();
  }, 250);
});

document.querySelector(".exit-link").addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

});
