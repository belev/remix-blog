/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
        7: '48px'
      },
      screens: {
        648: '648px',
        hashover: { raw: '(hover: hover) and (pointer: fine)' }
      },
      transitionDuration: {
        250: '250ms'
      }
    },
    borderRadius: {
      s: '3px',
      m: '6px'
    },
    fontSize: {
      s: 'var(--font-size-s)',
      base: 'var(--font-size-base)',
      m: 'var(--font-size-m)',
      l: 'var(--font-size-l)',
      xl: 'var(--font-size-xl)',
      xxl: 'var(--font-size-xxl)'
    },
    colors: {
      black: {
        0: 'var(--color-black-0)',
        5: 'var(--color-black-5)',
        10: 'var(--color-black-10)',
        15: 'var(--color-black-15)',
        20: 'var(--color-black-20)',
        25: 'var(--color-black-25)',
        30: 'var(--color-black-30)',
        40: 'var(--color-black-40)',
        50: 'var(--color-black-50)',
        60: 'var(--color-black-60)',
        70: 'var(--color-black-70)',
        80: 'var(--color-black-80)',
        85: 'var(--color-black-85)',
        90: 'var(--color-black-90)',
        95: 'var(--color-black-95)',
        100: 'var(--color-black-100)'
      },
      purple: {
        10: 'var(--color-purple-10)',
        20: 'var(--color-purple-20)',
        30: 'var(--color-purple-30)',
        40: 'var(--color-purple-40)',
        50: 'var(--color-purple-50)',
        60: 'var(--color-purple-60)',
        70: 'var(--color-purple-70)',
        80: 'var(--color-purple-80)',
        90: 'var(--color-purple-90)',
        95: 'var(--color-purple-95)'
      },
      text: {
        DEFAULT: 'var(--color-black-100)',
        secondary: 'var(--color-black-60)'
      },
      primary: 'var(--color-purple-70)',
      background: 'var(--color-black-5)',
      inherit: 'inherit'
    }
  },
  plugins: []
};
