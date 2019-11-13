import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const ButtonGroup = ({ parentClass, children }) => {
	const parentClassList = parentClass ? ` ${parentClass}` : parentClass

	return (
		<div className={`${st[`button-group`]}${parentClassList}`}>{children}</div>
	)
}

ButtonGroup.propTypes = {
	parentClass: PropTypes.string,
	children: PropTypes.node.isRequired,
}

ButtonGroup.defaultProps = {
	parentClass: ``,
}

export default ButtonGroup
