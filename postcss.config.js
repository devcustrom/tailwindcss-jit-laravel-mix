module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-nested"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("autoprefixer"),
		require("postcss-gap")({ method: "duplicate" }),
	],
};
