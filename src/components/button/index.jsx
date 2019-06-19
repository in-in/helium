import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Button = ({ variant, children }) => (
  <button type="button" className={st[`button_${variant}`]}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([`primary`, `secondary`, `danger`]).isRequired,
}

export default Button
