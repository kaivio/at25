module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./view/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'pointer': {
          'raw': '(hover: hover) and (pointer: fine)'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

