import React from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Heading = ({ title, subtitle }) => (
  <div className={st.heading}>
    <h1 className={st.title}>{title}</h1>
    <p className={st.subtitle}>{subtitle}</p>
  </div>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Heading
