import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Button = ({ children }) => (
  <button type="button" className={st.button}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
