/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['App.js',
    './screens/**/*.js',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

