// Set global options for Netlify Identity to point to the external Netlify site
window.netlifyIdentityOptions = {
    APIUrl: "https://heartfelt-axolotl-2d5788.netlify.app/.netlify/identity"
};

// Dynamically load the widget script with the correct data-url attribute
// This is required because MkDocs doesn't let us add attributes to extra_javascript tags
const script = document.createElement('script');
script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
script.setAttribute('data-url', "https://heartfelt-axolotl-2d5788.netlify.app");
script.async = true;
document.head.appendChild(script);
