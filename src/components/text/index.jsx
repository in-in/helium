import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Text = ({ classname, children, as }) => {
	const Component = as
	return <Component className={classname || st.text}>{children}</Component>
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	classname: PropTypes.string,
	as: PropTypes.elementType,
}

Text.defaultProps = {
	classname: ``,
	as: `p`,
}

export default Text
