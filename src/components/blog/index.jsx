import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Carousel from "../carousel"
import st from "./styles.module.scss"

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "blog" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`)

	return (
		<section className={st.blog}>
			<Container>
				{data.allSectionHeadingsJson.nodes.map(item => (
					<header key={item.id}>
						<Heading {...item} />
					</header>
				))}
				<div className={st.blog__carousel}>
					<Carousel />
				</div>
			</Container>
		</section>
	)
}

export default Blog
