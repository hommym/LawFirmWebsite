/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/*.tsx", "./src/**/*.tsx", "./src/**/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				inria: ["'Inria Sans' , sans-serif , serif"],
				popiins: ["'Poppins' , sans-serif , serif"],
			},
		},
	},
	plugins: [],
};
