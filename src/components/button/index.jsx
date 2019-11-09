import React from "react"
import PropTypes from "prop-types"
import Icon from "../icon"
import st from "./styles.module.scss"

const Button = props => {
	const { variant, icon, classname, children, as, href } = props
	const Component = as
	const buttonProps = {}

	if (Component === `button`) {
		buttonProps.type = `button`
	} else if (Component === `a`) {
		buttonProps.role = `button`
		buttonProps.href = href
	}

	return (
		<Component
			className={`${classname} ${st[`button_${variant}`]}`}
			{...buttonProps}
		>
			{children}
			{icon && <Icon filename={icon} classname={st.button__icon} />}
		</Component>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.string,
	classname: PropTypes.string,
	href: PropTypes.string,
	as: PropTypes.string,
	variant: PropTypes.oneOf([
		`primary`,
		`secondary`,
		`plain`,
		`dim`,
		`bright`,
		`plain-invert`,
	]).isRequired,
}

Button.defaultProps = {
	icon: ``,
	classname: ``,
	as: `button`,
	href: `#0`,
}

export default Button
