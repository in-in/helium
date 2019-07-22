import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Text = ({ classname, children }) => (
	<p className={classname || st.text}>{children}</p>
)

Text.propTypes = {
	children: PropTypes.node.isRequired,
	classname: PropTypes.string,
}

Text.defaultProps = {
	classname: ``,
}

export default Text
