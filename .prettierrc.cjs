/** @type {import("prettier").Options} */
module.exports = {
	useTabs: false,
	tabWidth: 2,
	singleQuote: false,
	trailingComma: 'all',
	printWidth: 120,
	bracketSameLine: true,
	endOfLine: 'auto',
	plugins: [
		'prettier-plugin-svelte'
		// "prettier-plugin-tailwindcss"
	],
	tailwindConfig: './tailwind.config.cjs',
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
