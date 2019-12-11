import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Heading from '../heading';
import Text from '../text';
import Button from '../button';
import ButtonGroup from '../button-group';
import Device from '../device';
import st from './styles.module.scss';

const Software = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "software" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`);

	const { caption } = data.allSectionHeadingsJson.nodes[0];

	return (
		<section className={st.software}>
			<Container>
				<div className={st.software__wrapper}>
					<div className={st.software__text}>
						<Heading {...data.allSectionHeadingsJson.nodes[0]} />
						<div className={st.software__caption}>
							<Text>{caption}</Text>
						</div>
						<div className={st.software__button}>
							<ButtonGroup>
								<Button variant="secondary" icon="triangle">
									View video
								</Button>
								<Button variant="plain" as="a">
									See features
								</Button>
							</ButtonGroup>
						</div>
					</div>
					<div className={st.software__showcase}>
						<Device />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Software;
