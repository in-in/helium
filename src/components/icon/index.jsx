import React from 'react';
import PropTypes from 'prop-types';
import st from './styles.module.scss';

const Icon = ({ filename, parentClass, hidden }) => {
	const req = require.context('../../images/icons', true, /\.svg$/);
	const IconTag = req(`./${filename}.svg`);
	const mixinClass = parentClass ? ` ${parentClass}` : parentClass;

	return (
		<IconTag
			aria-hidden={hidden}
			focusable={!hidden}
			className={`${st.icon}${mixinClass}`}
		/>
	);
};

Icon.propTypes = {
	filename: PropTypes.string.isRequired,
	parentClass: PropTypes.string,
	hidden: PropTypes.bool,
};

Icon.defaultProps = {
	hidden: true,
	parentClass: '',
};

export default Icon;
