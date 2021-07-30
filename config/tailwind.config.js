const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        amber: colors.amber 
      },


      fontFamily: {
        ...fontFamily,
        'sans': 'Poppins, sans-serif'
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.800'),
            },

            h3: {
              color: theme('colors.gray.700'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            em: {
              color: theme('colors.gray.400'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.gray.300')
              },
            },
          },
        },
      })
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}

