// Check if we are on the live Netlify site
const isNetlify = window.location.hostname.includes("netlify.app");

// Dynamically load the widget script
const script = document.createElement('script');
script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";

// Only add data-url if we are NOT on Netlify (External context needs to know where home is)
if (!isNetlify) {
    script.setAttribute('data-url', "https://heartfelt-axolotl-2d5788.netlify.app");
}

script.async = true;
document.head.appendChild(script);

// Ensure init is called after script load
script.onload = function () {
    if (window.netlifyIdentity) {
        if (isNetlify) {
            // On the Netlify site (Popup), use generic init to let the widget auto-detect its role
            window.netlifyIdentity.init({});
        } else {
            // On GitHub Pages (Opener), force connection to the remote Netlify instance
            window.netlifyIdentity.init({
                APIUrl: "https://heartfelt-axolotl-2d5788.netlify.app/.netlify/identity"
            });
        }
    }
};
