/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {},
            maxWidth: {
                cutoff: '1440px',
            },
            fontFamily: {
                sand: ['Quick Sand', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
                myungjo: ['Nanum Myeongjo', 'serif'],
            },
            transitionProperty: {
                smooth: 'all 0.35s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
