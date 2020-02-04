import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import st from './styles.module.scss';

const Button = (props) => {
	const {
		variant, icon, parentClass, children, as, href, type, onclick,
	} = props;
	const Component = as;
	const buttonProps = {};
	const mixinClass = parentClass ? ` ${parentClass}` : parentClass;

	if (Component === 'button') {
		buttonProps.type = type;
	} else if (Component === 'a') {
		buttonProps.role = 'button';
		buttonProps.href = href;
	}

	return (
		<Component
			className={`${st[`button_${variant}`]}${mixinClass}`}
			onClick={onclick}
			{...buttonProps}
		>
			{children}
			{icon && <Icon filename={icon} parentClass={st.button__icon} />}
		</Component>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.string,
	parentClass: PropTypes.string,
	href: PropTypes.string,
	as: PropTypes.string,
	type: PropTypes.string,
	onclick: PropTypes.func,
	variant: PropTypes.oneOf([
		'primary',
		'secondary',
		'plain',
		'dim',
		'bright',
		'plain-invert',
	]).isRequired,
};

Button.defaultProps = {
	icon: '',
	parentClass: '',
	as: 'button',
	href: '//0',
	type: 'button',
	onclick: (e) => e.preventDefault(),
};

export default Button;
