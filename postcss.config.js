const postcssEasyImport = require('postcss-easy-import');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCssVariables = require('postcss-css-variables');
const postcssMqPacker = require('css-mqpacker');
const postcssAutoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        postcssEasyImport(),
        postcssNested(),
        postcssCustomMedia(),
        cssnano({
            preset: 'default',
        }),
        postcssCssVariables(),
        postcssMqPacker(),
        postcssAutoprefixer({
            browsers: '> 5%',
        }),
    ],
};