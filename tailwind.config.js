/** @type {import('tailwindcss').Config} */
export default {
	content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
	theme: {
		extend: {
			colors: {
				primary: "#D14D72",
				secondary: "#FFABAB",
				tertiary: "#FEF2F4",
				quaternary: "#FCC8D1"
			},
			fontFamily: {
				primary: ["Work Sans"]
			}
		}
	},
	plugins: []
};