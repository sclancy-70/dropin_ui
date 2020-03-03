const autoprefixer = require('autoprefixer');
const parser = require('postcss-comment')
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({ 
    content: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],
})

module.exports = {
  parser,
  plugins: [
    tailwindcss,
    autoprefixer,
  
  ],
};
