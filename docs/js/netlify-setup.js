// Check if we are on the live Netlify site
const isNetlify = window.location.hostname.includes("netlify.app");

// Only set global options for external access if we are NOT on Netlify
if (!isNetlify) {
    window.netlifyIdentityOptions = {
        APIUrl: "https://heartfelt-axolotl-2d5788.netlify.app/.netlify/identity"
    };
}

// Dynamically load the widget script
const script = document.createElement('script');
script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";

// Only add data-url if we are NOT on Netlify
if (!isNetlify) {
    script.setAttribute('data-url', "https://heartfelt-axolotl-2d5788.netlify.app");
}

script.async = true;
document.head.appendChild(script);

// Ensure init is called after script load, which handles the token callback
script.onload = function () {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.init(isNetlify ? {} : window.netlifyIdentityOptions);
    }
};
