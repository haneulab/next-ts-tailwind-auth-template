/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './packages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {},
            maxWidth: {
                cutoff: '1280px',
            },
            fontFamily: {},
            transitionProperty: {
                smooth: 'all 0.35s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
