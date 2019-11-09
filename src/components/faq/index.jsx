import React from "react"
import PropTypes from "prop-types"
import Text from "../text"
import Button from "../button"
import st from "./styles.module.scss"

const Faq = ({ question, answer, link, accordionHeader }) => {
	return (
		<div className={st.faq}>
			{!accordionHeader && <h3 className={st.faq__question}>{question}</h3>}
			<Text classname={st.faq__answer}>{answer}</Text>
			<Button variant="dim" classname={st.faq__link} as="a" href={link}>
				Go to documentation
			</Button>
		</div>
	)
}

Faq.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	accordionHeader: PropTypes.bool,
}

Faq.defaultProps = {
	accordionHeader: false,
}

export default Faq
