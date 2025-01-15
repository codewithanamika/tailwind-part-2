// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your source files
  ],
  theme: {
    extend: {}, // Extend or customize your theme here
  },
  plugins: [
    require('@tailwindcss/forms')
  ], // Add plugins here if needed
};
