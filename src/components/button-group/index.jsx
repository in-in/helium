import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const ButtonGroup = ({ children }) => (
	<div className={st[`button-group`]}>{children}</div>
)

ButtonGroup.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ButtonGroup
