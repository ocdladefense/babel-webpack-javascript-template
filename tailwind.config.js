/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{html,js,jsx}',
        './dev_modules/@ocdla/global-components/**/*.{html,js,jsx}',
        './node_modules/@ocdla/**/*.{html,js,jsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: []
};
