import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Text = ({ children }) => <p className={st.text}>{children}</p>

Text.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Text
