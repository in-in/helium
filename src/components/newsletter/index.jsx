import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Text from "../text"
import Button from "../button"
import st from "./styles.module.scss"

const Newsletter = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "newsletter" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`)

	return (
		<section className={st.newsletter}>
			<Container>
				<div className={st.newsletter__wrapper}>
					<div className={st.newsletter__text}>
						{data.allSectionHeadingsJson.nodes.map(item => (
							<Fragment key={item.id}>
								<Heading
									{...item}
									key={item.id}
									parentClass={st.newsletter__header}
								/>
								<Text>{item.caption}</Text>
							</Fragment>
						))}
					</div>
					<form className={st.newsletter__form}>
						<input
							aria-label="Email"
							className={st.newsletter__input}
							type="email"
							placeholder="Email Address"
						/>
						<Button variant="secondary">Subscribe</Button>
					</form>
				</div>
			</Container>
		</section>
	)
}

export default Newsletter
