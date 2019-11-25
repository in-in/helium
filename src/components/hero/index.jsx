import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Text from "../text"
import Icon from "../icon"
import st from "./styles.module.scss"

const clouds = Array(13).fill(0)

const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "hero" } }) {
				nodes {
					...sectionHeadings
				}
			}
		}
	`)

	return (
		<section className={st.hero}>
			{data.allSectionHeadingsJson.nodes.map(item => (
				<Container key={item.id}>
					<Heading {...item} parentClass={st.hero__header} />
					<div className={st.hero__caption}>
						<Text>{item.caption}</Text>
					</div>
				</Container>
			))}

			<Icon hidden filename="chart" classname={st.hero__chart} />
			{clouds.map((item, i) => (
				<Icon
					hidden
					filename="cloud"
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					classname={st[`hero__cloud_${i + 1}`]}
				/>
			))}
		</section>
	)
}

export default Hero
