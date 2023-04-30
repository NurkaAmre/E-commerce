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
        fluid2: 'repeat(auto-fit, minmax(30rem, 2fr))',
      },
      fontFamily: {
        lobster: ['var(--font-lobster)'],
        roboto: ['var(--font-roboto)'],
        castoro: ['var(--font-castoro)'],
        dancing_script: ['var(--font-dancing)'],
      },
      boxShadow: {
        custom: '15px -2px 63px 13px rgba(16, 201, 199, 0.908);',
      },
      backgroundImage: {
        custom: "url('/public.pattern.png')",
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lemonade', 'halloween'],
  },
};
