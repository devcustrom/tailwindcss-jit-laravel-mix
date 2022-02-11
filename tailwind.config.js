module.exports = {
	mode: "jit",
	content: ["src/css/*.css", "src/js/*.js", "./index.html"],
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
