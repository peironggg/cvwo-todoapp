var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./app/javascript/components/App.css'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
