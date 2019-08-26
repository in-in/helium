module.exports = {
	parser: `babel-eslint`,
	extends: [`airbnb`, `prettier`, `prettier/react`, `airbnb/hooks`],
	plugins: [`prettier`],
	rules: {
		quotes: [`error`, `backtick`],
		"prettier/prettier": `error`,
		"react/jsx-props-no-spreading": [`error`, { exceptions: [`Heading`] }],
	},
}
