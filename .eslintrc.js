module.exports = {
	extends: [`airbnb`, `prettier`, `prettier/react`, `airbnb/hooks`],
	rules: {
		quotes: [`error`, `backtick`],
		"react/jsx-props-no-spreading": [`error`, { exceptions: [`Heading`] }],
	},
}
