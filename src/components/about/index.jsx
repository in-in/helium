import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Heading from '../heading';
import Features from '../features';
import Button from '../button';
import Text from '../text';
import Icon from '../icon';
import st from './styles.module.scss';

const clouds = Array(10).fill(0);

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "about" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`);

	return (
		<section className={st.about}>
			<Container>
				<Heading
					{...data.allSectionHeadingsJson.nodes[0]}
					parentClass={st.about__header}
				/>
				<Features />
				<div className={st.about__button}>
					<Button variant="primary" as="a">
						Read more
					</Button>
					<Text parentClass={st.about__text}>or</Text>
					<Button variant="primary" as="a">
						Get started
					</Button>
				</div>
			</Container>

			{clouds.map((item, i) => (
				<Icon
					filename="cloud"
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					parentClass={st[`about__cloud_${i + 1}`]}
				/>
			))}
		</section>
	);
};

export default About;
