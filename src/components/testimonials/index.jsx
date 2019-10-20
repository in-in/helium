import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Text from "../text"
import Quote from "../quote"
import st from "./styles.module.scss"

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
					quote
					images {
						alt
						width
						sources {
							x1
							x2
							x3
						}
					}
				}
			}
		}
	`)
	return (
		<section className={st.testimonials}>
			<Container>
				<div className={st.testimonials__wrapper}>
					<div className={st.testimonials__text}>
						{data.allSectionHeadingsJson.nodes.map(item => (
							<Fragment key={item.id}>
								<Heading {...item} parentClass={st.testimonials__header} />
								<Text>{item.caption}</Text>
							</Fragment>
						))}
					</div>
					<div className={st.testimonials__carousel}>
						{data.allTestimonialsJson.nodes.map(item => (
							<Quote key={item.id} quote={item.quote} images={item.images} />
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Testimonials
