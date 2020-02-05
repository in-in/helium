import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Heading from '../heading';
import Text from '../text';
import Button from '../button';
import st from './styles.module.scss';

const Newsletter = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "newsletter" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`);

	const { caption } = data.allSectionHeadingsJson.nodes[0];

	return (
		<section className={st.newsletter}>
			<Container>
				<div className={st.newsletter__wrapper}>
					<div className={st.newsletter__text}>
						<Heading
							{...data.allSectionHeadingsJson.nodes[0]}
							parentClass={st.newsletter__header}
						/>
						<Text>{caption}</Text>
					</div>
					<form
						action="https://app.form2chat.io/f/a1ec111"
						method="POST"
						acceptCharset="UTF-8"
						className={st.newsletter__form}
					>
						<input
							aria-label="Email"
							name="email"
							className={st.newsletter__input}
							type="email"
							placeholder="Email Address"
							required
						/>
						<Button
							variant="secondary"
							type="submit"
							onclick={(e) => e}
							parentClass={st.newsletter__button}
						>
							Subscribe
						</Button>
					</form>
				</div>
			</Container>
		</section>
	);
};

export default Newsletter;
