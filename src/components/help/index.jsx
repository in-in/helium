import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import st from "./styles.module.scss"

const Help = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "help" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`)

	return (
		<section className={st.help}>
			<Container>
				{data.allSectionHeadingsJson.nodes.map(item => (
					<Heading {...item} key={item.id} parentClass={st.help__header} />
				))}
			</Container>
		</section>
	)
}

export default Help
