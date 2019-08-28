import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Features from "../features"
import Button from "../button"
import Text from "../text"
import Icon from "../icon"
import st from "./styles.module.scss"

const clouds = Array(10).fill(0)

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
					<div className={st.about__button}>
						<Button variant="primary">Read more</Button>
						<Text classname={st.about__text}>or</Text>
						<Button variant="primary">Get started</Button>
					</div>
				</div>
			</Container>

			{clouds.map((item, i) => (
				<Icon
					hidden
					filename="cloud"
					// eslint-disable-next-line react/no-array-index-key
					key={i}
					classname={st[`about__cloud_${i + 1}`]}
				/>
			))}
		</section>
	)
}

export default About
