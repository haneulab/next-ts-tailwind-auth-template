/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './@view/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {},
            maxWidth: {
                cutoff: '1440px',
            },
            fontFamily: {
                'head-main': ['Inter', 'sans-serif'],
                'para-main': ['Nunito', 'sans-serif'],
                'para-sub': ['Sono', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.45s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
