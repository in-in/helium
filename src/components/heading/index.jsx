import React, { Fragment } from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const strongify = ({ text, accent }) => {
	const result = text.split(` `).map((word, i) => {
		if (accent && accent.some(el => el === i)) {
			return (
				// eslint-disable-next-line react/no-array-index-key
				<strong key={i} className={st.accent}>
					{word}
					{` `}
				</strong>
			)
		}
		// eslint-disable-next-line react/no-array-index-key
		return <Fragment key={i}>{word} </Fragment>
	})
	return result
}

const Heading = ({ title, subtitle, left, big, parentClass }) => (
	<header className={`${parentClass} ${left ? st.heading_left : st.heading}`}>
		<p className={st.subtitle}>{subtitle}</p>
		{big ? (
			<h1 className={st.title_big}>{strongify(title)}</h1>
		) : (
			<h2 className={st.title}>{strongify(title)}</h2>
		)}
	</header>
)

Heading.propTypes = {
	subtitle: PropTypes.string.isRequired,
	parentClass: PropTypes.string,
	title: PropTypes.shape({
		text: PropTypes.string,
		accent: PropTypes.array,
	}).isRequired,
	left: PropTypes.bool,
	big: PropTypes.bool,
}

Heading.defaultProps = {
	left: false,
	big: false,
	parentClass: ``,
}

export default Heading
