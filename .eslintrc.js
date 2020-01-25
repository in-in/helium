module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'airbnb/hooks'],
	rules: {
		'implicit-arrow-linebreak': 0,
		'max-len': [
			'error', 90, 2, {
				ignoreStrings: true,
			},
		],
		'no-tabs': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': 0,
	},
};
