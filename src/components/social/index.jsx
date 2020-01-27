import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import st from './styles.module.scss';
import Icon from '../icon';

const Social = () => {
	const data = useStaticQuery(graphql`
		query {
			allSocialItemsJson(sort: { fields: name, order: ASC }) {
				nodes {
					id
					name
					url
				}
			}
		}
	`);

	return (
		<ul className={st.social}>
			{data.allSocialItemsJson.nodes.map((item) => (
				<li className={st.social__item} key={item.id}>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={item.url}
						className={st.social__link}
						title={item.name}
						aria-label={item.name}
					>
						<Icon
							filename={`social/${item.name.toLowerCase()}`}
							parentClass={st.social__icon}
						/>
					</a>
				</li>
			))}
		</ul>
	);
};

export default Social;
