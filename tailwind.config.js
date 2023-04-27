/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      fontFamily: {
        lobster: ['var(--font-lobster)'],
        roboto: ['var(--font-roboto)'],
      },
      boxShadow: {
        custom: '15px -2px 63px 13px rgba(16, 201, 199, 0.908);',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lemonade', 'night'],
  },
};
