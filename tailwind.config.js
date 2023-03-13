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
                'head[ko]-myungjo': ['Namum Myeongjo', 'serif'],
                'para[ko]-brush': ['Nanum Brush Script', 'cursive'],
                'para[ko]-batang': ['Gowun Batang', 'serif'],
                'head[en]-inter': ['Inter', 'sans-serif'],
                'para[en]-sono': ['Sono', 'sans-serif'],
                'para[en]-nunito': ['Nunito', 'sans-serif'],
            },
            transitionProperty: {
                smooth: 'all 0.45s ease-in cubic-bezier(0.23, 1, 0.32, 1)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
