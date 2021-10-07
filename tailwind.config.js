const plugin = require('tailwindcss/plugin')
const lodash = require('lodash');
const postcssEasyImport = require('postcss-easy-import');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCssVariables = require('postcss-css-variables');
const postcssAutoprefixer = require('autoprefixer');

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    extend: {
      colors: {
        gray: {
          1000: '#1c1c1c',
          1100: '#111111'
        },
        blue: {
          850: 'rgb(10,49,72)',
          950: 'rgb(16,23,38)',
          960: 'rgb(2, 25, 34)',
          970: 'rgb(12,23,38)',
          980: 'rgb(14,19,31)'
        }
      },
      grayscale: {
          50: '50%',
      }
    },
  },
  variants: {
    extend: {
        filter: ['dark'],
        grayscale: ['dark', 'hover', 'focus']
    },
  },
  plugins: [
    // postcssEasyImport(),
    // postcssNested(),
    // postcssCustomMedia(),
    // postcssCssVariables(),
    // postcssAutoprefixer(
    // {browsers: '> 5%',}
    // ),
    plugin(function({ e, addUtilities }) {
      const lineClampUtilities = lodash.fromPairs(
          lodash.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => {
            return [
              `.${e(`clamp-${value}`)}`,
              {
                display: '-webkit-box',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': `${value}`,
                overflow: 'hidden'
              },
            ];
          })
      );
      addUtilities(lineClampUtilities, ['responsive']);
    }),
  ],
}