import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '../icon';
import st from './styles.module.scss';

const Logo = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
`);

	return (
		<a
			href="/"
			className={st.logo}
			aria-label={`${data.site.siteMetadata.title} Homepage`}
		>
			<Icon filename="logo" parentClass={st.logo__icon} />
		</a>
	);
};

export default Logo;
