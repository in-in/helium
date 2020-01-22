import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Heading from '../heading';
import Text from '../text';
import Quote from '../quote';
import Carousel from '../carousel';
import st from './styles.module.scss';

const Testimonials = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "testimonials" } }) {
				nodes {
					...sectionHeadings
				}
			}
			allTestimonialsJson {
				nodes {
					id
					name
					company
					occupation
					quote
					images {
						alt
						width
						source
					}
				}
			}
		}
	`);

	const { caption } = data.allSectionHeadingsJson.nodes[0];

	return (
		<section className={st.testimonials}>
			<Container>
				<div className={st.testimonials__wrapper}>
					<div className={st.testimonials__text}>
						<Heading
							{...data.allSectionHeadingsJson.nodes[0]}
							parentClass={st.testimonials__header}
						/>
						<Text>{caption}</Text>
					</div>
					<div className={st['testimonials__carousel-wrapper']}>
						<Carousel nav={false}>
							{data.allTestimonialsJson.nodes.map((item) => {
								const {
									id, quote, images, name, company, occupation,
								} = item;
								return (
									<Quote
										key={id}
										name={name}
										company={company}
										occupation={occupation}
										quote={quote}
										images={images}
									/>
								);
							})}
						</Carousel>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Testimonials;
