// Define the API URL for all environments to ensure consistency
const apiUrl = "https://heartfelt-axolotl-2d5788.netlify.app/.netlify/identity";

// Dynamically load the widget script
const script = document.createElement('script');
script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";

// If we are on the external site (GitHub Pages), we MUST use data-url to point to Netlify
if (!window.location.hostname.includes("netlify.app")) {
    script.setAttribute('data-url', "https://heartfelt-axolotl-2d5788.netlify.app");
}

script.async = true;
document.head.appendChild(script);

// Ensure init is called after script load
script.onload = function () {
    if (window.netlifyIdentity) {
        // Explicitly initialize with the API URL everywhere
        // This ensures the widget on the Netlify side knows exactly where to look for the token
        window.netlifyIdentity.init({
            APIUrl: apiUrl
        });
    }
};
