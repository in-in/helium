import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Accordion from "../accordion"
import Faq from "../faq"
import st from "./styles.module.scss"

const Help = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "help" } }) {
				nodes {
					...sectionHeadings
				}
			}
			allFaqJson {
				nodes {
					id
					question
					answer
					link
				}
			}
		}
	`)

	return (
		<section className={st.help}>
			<Container>
				<Heading
					{...data.allSectionHeadingsJson.nodes[0]}
					parentClass={st.help__header}
				/>
				<div className={st.help__accordion}>
					<Accordion>
						{data.allFaqJson.nodes.map(item => {
							const { id, question, answer, link } = item
							return (
								<Faq key={id} question={question} answer={answer} link={link} />
							)
						})}
					</Accordion>
				</div>
			</Container>
		</section>
	)
}

export default Help
