/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'section-shadow': '-3px 8px 24px rgba(0, 0, 0, 0.23);',
        'hr-shadow': '0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #AE7BE3, inset 0px 4px 3px #FBF8FF',

        'circle-shadow': '0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06), inset 0px -2.55556px 5.11111px #AE7BE3, inset 0px 5.11111px 3.83333px #FBF8FF;'
      }
    }
  },
  plugins: []
}
