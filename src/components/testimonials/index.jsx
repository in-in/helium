import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import st from "./styles.module.scss"

const Testimonials = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "testimonials" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`)
	return (
		<section className={st.testimonials}>
			<Container>
				{data.allSectionHeadingsJson.nodes.map(item => (
					<header key={item.id}>
						<Heading {...item} />
					</header>
				))}
			</Container>
		</section>
	)
}

export default Testimonials
