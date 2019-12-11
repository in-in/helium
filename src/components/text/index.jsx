import React from 'react';
import PropTypes from 'prop-types';
import st from './styles.module.scss';

const Text = ({
	children, as, parentClass, modifier, title,
}) => {
	const Component = as;
	const classname = modifier
		? modifier.map((item) => st[`text_${item}`]).join(' ')
		: st.text;
	const mixinClass = parentClass ? ` ${parentClass}` : parentClass;

	return (
		<Component className={`${classname}${mixinClass}`} title={title}>
			{children}
		</Component>
	);
};

Text.propTypes = {
	children: PropTypes.node.isRequired,
	parentClass: PropTypes.string,
	modifier: PropTypes.arrayOf(PropTypes.oneOf(['light'])),
	as: PropTypes.elementType,
	title: PropTypes.string,
};

Text.defaultProps = {
	parentClass: '',
	modifier: null,
	as: 'p',
	title: null,
};

export default Text;
