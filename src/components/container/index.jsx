import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Container = ({ children }) => (
  <div className={st.container}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
