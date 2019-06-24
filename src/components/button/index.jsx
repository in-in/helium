import React from "react"
import PropTypes from "prop-types"
import Icon from "../icon"
import st from "./styles.module.scss"

const Button = ({ variant, icon, children }) => (
  <button type="button" className={st[`button_${variant}`]}>
    {children}
    {icon && <Icon filename={icon} classname={st.button__icon} />}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
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
}

export default Button
