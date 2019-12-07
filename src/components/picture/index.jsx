import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import st from "./styles.module.scss"

const Picture = ({ classname, data }) => {
	const query = useStaticQuery(graphql`
		query {
			images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
				nodes {
					publicURL
					base
				}
			}
		}
	`)

	const getUrl = name => {
		let url = ``
		query.images.nodes
			.filter(img => img.base === name)
			.forEach(i => {
				url = i.publicURL
			})
		if (!url) {
			try {
				throw new Error(`There is no image with name: ${name}`)
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e)
			}
		}
		return url
	}

	return (
		<picture className={classname || st.picture}>
			{data
				.sort((a, b) => b.width - a.width)
				.map(item => {
					return item.width > 0 ? (
						<source
							key={item.width}
							srcSet={Object.entries(item.sources).map(i => {
								return `${getUrl(i[1])} ${i[0].slice(`1`)}x`
							})}
							media={`(min-width: ${item.width}px)`}
						/>
					) : (
						<img
							key={item.width}
							src={getUrl(item.sources.x1)}
							alt={item.alt}
						/>
					)
				})}
		</picture>
	)
}

Picture.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	classname: PropTypes.string,
}

Picture.defaultProps = {
	classname: ``,
}

export default Picture
