/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ddark: '#000000',
                dlight: '#FFFFFF',
            },
            maxWidth: {
                cutoff: '1440px',
            },
        },
    },
    plugins: [],
}
