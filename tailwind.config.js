/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        fontFamily: {
            'body': ['Open Sans', 'sans-serif'],
            'display': ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                cyan: {
                    25: '#ebfbff',
                    975: '#00252e'
                },
                pink: {
                    450: '#ff52bf'
                },
                slate: {
                    450: '#808d99'
                }
            }
        },
    },
    plugins: [],
}
