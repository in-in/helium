import React from "react"
import PropTypes from "prop-types"
import Container from "../container"
import st from "./styles.module.scss"

const Section = ({ children }) => (
  <section className={st.section}>
    <Container>{children}</Container>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
