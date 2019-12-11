import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import st from './styles.module.scss';

const strongify = ({ text, accent }) => {
	const result = text.split(' ').map((word, i) => {
		if (accent && accent.some((el) => el === i)) {
			return (
				// eslint-disable-next-line react/no-array-index-key
				<strong key={i} className={st.accent}>
					{word}
					{' '}
				</strong>
			);
		}
		return (
			// eslint-disable-next-line react/no-array-index-key
			<Fragment key={i}>
				{word}
			</Fragment>
		);
	});
	return result;
};

const Heading = ({
	title, subtitle, big, parentClass, modifier,
}) => {
	const classname = modifier
		? modifier.map((item) => st[`heading_${item}`]).join(' ')
		: st.heading;

	const mixinClass = parentClass ? ` ${parentClass}` : parentClass;

	return (
		<header className={`${classname}${mixinClass}`}>
			<p className={st.subtitle}>{subtitle}</p>
			{big ? (
				<h1 className={st.title_big}>{strongify(title)}</h1>
			) : (
				<h2 className={st.title}>{strongify(title)}</h2>
			)}
		</header>
	);
};

Heading.propTypes = {
	subtitle: PropTypes.string.isRequired,
	parentClass: PropTypes.string,
	modifier: PropTypes.arrayOf(PropTypes.oneOf(['left', 'light'])),
	title: PropTypes.shape({
		text: PropTypes.string,
		accent: PropTypes.array,
	}).isRequired,
	big: PropTypes.bool,
};

Heading.defaultProps = {
	big: false,
	parentClass: '',
	modifier: [],
};

export default Heading;
