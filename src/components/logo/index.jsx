import React from "react"
import st from "./styles.module.scss"
import Icon from "./logo.svg"

const Logo = () => (
  <a href="/" className={st.logo}>
    <Icon className={st.logo__icon} />
  </a>
)

export default Logo
