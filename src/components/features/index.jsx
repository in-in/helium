import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '../icon';
import Text from '../text';
import st from './styles.module.scss';

const Features = () => {
	const data = useStaticQuery(graphql`
		query {
			allFeaturesJson {
				nodes {
					id
					title
					icon
					desc
				}
			}
		}
	`);

	return (
		<ul className={st.features}>
			{data.allFeaturesJson.nodes.map((item) => (
				<li className={st.features__item} key={item.id}>
					<Icon filename={`features/${item.icon}`} parentClass={st.features__icon} />
					<div className={st.features__content}>
						<h3 className={st.features__title}>{item.title}</h3>
						<Text parentClass={st.features__text} title={item.desc}>
							{item.desc}
						</Text>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Features;
