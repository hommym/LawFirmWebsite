/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/*.tsx", "./src/**/*.tsx", "./src/**/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				desc: "#454545",
				sec: "#e1a119",
				primary: "#000000",
				sec2: "#a78229",
			},
			fontFamily: {
				inria: ["'Inria Sans' , sans-serif , serif"],
				poppins: ["'Poppins' , sans-serif , serif"],
				"inria-serif": ["'Inria Serif' , sans-serif"],
			},
			fontSize: {
				"4xl": "40px",
			},
			maxWidth: {
				"6xl": "1126px",
			},
			dropShadow: {
				"3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
