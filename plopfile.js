module.exports = plop => {
	plop.setGenerator(`component`, {
		description: `Create a component`,
		prompts: [
			{
				type: `input`,
				name: `name`,
				message: `What is your component name?`,
			},
		],
		actions: [
			{
				type: `add`,
				path: `src/components/{{ lowerCase name }}/index.jsx`,
				templateFile: `plop-templates/component.jsx.hbs`,
			},
			{
				type: `add`,
				path: `src/components/{{ lowerCase name }}/styles.module.scss`,
				templateFile: `plop-templates/component.scss.hbs`,
			},
		],
	})
}
