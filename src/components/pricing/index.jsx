import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Heading from '../heading';
import Text from '../text';
import Button from '../button';
import ButtonGroup from '../button-group';
import Icon from '../icon';
import st from './styles.module.scss';

const clouds = Array(9).fill(0);

const Pricing = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "pricing" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`);

	const { caption } = data.allSectionHeadingsJson.nodes[0];

	return (
		<section className={st.pricing}>
			<Container>
				<Heading
					{...data.allSectionHeadingsJson.nodes[0]}
					parentClass={st.pricing__header}
				/>
				<Text parentClass={st.pricing__text} modifier={['light']}>
					{caption}
				</Text>
				<ButtonGroup parentClass={st.pricing__button}>
					<Button variant="bright" as="a">
						View pricing
					</Button>
					<Button variant="plain-invert" as="a">
						Read documentation
					</Button>
				</ButtonGroup>
			</Container>
			{clouds.map((item, i) => (
				<Icon
					hidden
					filename="cloud"
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					classname={st[`pricing__cloud_${i + 1}`]}
				/>
			))}
		</section>
	);
};

export default Pricing;
