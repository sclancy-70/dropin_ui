module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['Nunito Sans', 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      banner: ['Montserrat', 'Helvetica', 'Roboto', 'Arial', 'sans-serif']
      
    },
    extend: {
      colors: {
        primary: {
          default: '#15244b',
          light: '#7F879C',
          dark: '#080E1C',
        },
        secondary: {
          default: '#F1F1F1',
          light: '#e6e6e6',
          dark: '#696969',
        },
        highlight: {
          default: '#00a79d',
          light: '#73CFC9',
          dark: '#004C48',
        },
        lightGray: {
          default: '#7c7c7c',
          light: '#B7B7B7',
          dark: '#2E2E2E',
        }
      },
      inset: {
        '1/2': '50%',
      },
    },
    fill: (theme) => ({
      primary: theme('colors.primary'),
      white: theme('colors.white'),
    }),
  },
  variants: {},
  plugins: [],
}
