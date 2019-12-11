import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '../icon';
import st from './styles.module.scss';

const Stats = () => {
	const data = useStaticQuery(graphql`
		query {
			allStatsJson {
				nodes {
					icon
					number
					desc
					id
				}
			}
		}
	`);

	return (
		<section className={st.stats}>
			<h2 className="visually-hidden">Our statistics</h2>
			{data.allStatsJson.nodes.map((item) => (
				<div className={st['stats-block']} key={item.id}>
					<Icon filename={item.icon} classname={st['stats-block__icon']} />
					<strong className={st['stats-block__number']}>{item.number}</strong>
					<p className={st['stats-block__desc']}>{item.desc}</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
