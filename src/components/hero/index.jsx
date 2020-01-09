import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Heading from '../heading';
import Text from '../text';
import Icon from '../icon';
import Chart from '../chart';
import st from './styles.module.scss';

const clouds = Array(13).fill(0);

const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "hero" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`);

	const { caption } = data.allSectionHeadingsJson.nodes[0];

	return (
		<section className={st.hero}>
			<Container>
				<Heading
					{...data.allSectionHeadingsJson.nodes[0]}
					parentClass={st.hero__header}
				/>
				<div className={st.hero__caption}>
					<Text>{caption}</Text>
				</div>
			</Container>

			<Chart />
			{clouds.map((item, i) => (
				<Icon
					filename="cloud"
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					parentClass={st[`hero__cloud_${i + 1}`]}
				/>
			))}
		</section>
	);
};

export default Hero;
