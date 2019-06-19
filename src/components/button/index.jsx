import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Button = ({ variant, children }) => {
  const baseClass = `button`
  const modifier = `--`

  return (
    <button
      type="button"
      className={`${st[baseClass]} ${st[baseClass + modifier + variant]}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([`primary`, `secondary`, `danger`]).isRequired,
}

export default Button
