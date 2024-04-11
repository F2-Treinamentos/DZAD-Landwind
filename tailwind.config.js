/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "index.html",
        "./*.html",
        "./assets/js/*.js",
        "./assets/css/*.css",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#eff6ff",
                    "100": "#dbeafe",
                    "200": "#bfdbfe",
                    "300": "#93c5fd",
                    "400": "#60a5fa",
                    "500": "#3b82f6",
                    "600": "#2563eb",
                    "700": "#1d4ed8",
                    "800": "#1e40af",
                    "900": "#1e3a8a"
                }
            },
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
                'sans': ['ui-sans-serif', 'system-ui', /* ... */],
                'serif': ['ui-serif', 'Georgia', /* ... */],
                'mono': ['ui-monospace', 'SFMono-Regular', /* ... */],
                'display': ['Oswald', /* ... */], // Add your custom font here
                'body': ['"Open Sans"', /* ... */],
                'base': ['base', /* ... */],
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
