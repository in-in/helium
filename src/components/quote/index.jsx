import React from "react"
import PropTypes from "prop-types"
import Picture from "../picture"
import Text from "../text"
import st from "./styles.module.scss"

const Quote = ({ quote, images }) => (
	<div className={st.quote}>
		<blockquote className={st.quote__text}>
			<Text>{quote}</Text>
		</blockquote>
		<Picture data={images} classname={st.quote__avatar} />
	</div>
)

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Quote
