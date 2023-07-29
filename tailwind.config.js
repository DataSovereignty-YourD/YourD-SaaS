/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        gridTemplateColumns: {
          // Simple 16 column grid
          '16': 'repeat(16, minmax(0, 1fr))',
          'main': 'repeat(auto-fill,minmax(800px, 1fr))',
          // Complex site-specific column configuration
          'footer': '200px minmax(900px, 1fr) 100px',
        },
      },
    },
    plugins: [],
  }