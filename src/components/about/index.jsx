import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Features from "../features"
import st from "./styles.module.scss"

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "about" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`)

	return (
		<section className={st.about}>
			<Container>
				<div className={st.about__wrapper}>
					{data.allSectionHeadingsJson.nodes.map(item => (
						<header className={st.about__header} key={item.id}>
							<Heading {...item} />
						</header>
					))}
					<div className={st.about__features}>
						<Features />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default About
