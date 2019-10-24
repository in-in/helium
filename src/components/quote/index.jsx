import React from "react"
import PropTypes from "prop-types"
import Picture from "../picture"
import Text from "../text"
import st from "./styles.module.scss"

const Quote = ({ name, company, occupation, quote, images }) => (
	<blockquote className={st.quote}>
		<Text classname={st.quote__text}>{quote}</Text>
		<Picture data={images} classname={st.quote__avatar} />
		<strong className={st.quote__name}>{name}</strong>
		<Text classname={st.quote__company}>
			{occupation} at {company}
		</Text>
	</blockquote>
)

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	occupation: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Quote
