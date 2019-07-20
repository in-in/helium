import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../icon"
import st from "./styles.module.scss"

const Features = () => {
	const data = useStaticQuery(graphql`
		query {
			allFeaturesJson {
				nodes {
					id
					title
					icon
					desc
				}
			}
		}
	`)

	return (
		<ul className={st.features}>
			{data.allFeaturesJson.nodes.map(item => (
				<li className={st.features__item} key={item.id}>
					<Icon
						filename={`features/${item.icon}`}
						classname={st.features__icon}
					/>
					<h4 className={st.features__title}>{item.title}</h4>
					<p className={st.features__desc}>{item.desc}</p>
				</li>
			))}
		</ul>
	)
}

export default Features
