/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

// npm install react-bootstrap bootstrap
// npm install -D tailwindcss
// npx tailwindcss init
// npm install flowbite flowbite-react
// npm run start