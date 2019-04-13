import React from "react"
import PropTypes from "prop-types"
import Logo from "../logo"
import Container from "../container"
import Button from "../button"
import st from "./styles.module.scss"

const HeaderContent = ({ children }) => (
  <div className={st.header__content}>{children}</div>
)

const Header = () => (
  <header className={st.header}>
    <Container>
      <HeaderContent>
        <Logo />
        <Button>click</Button>
      </HeaderContent>
    </Container>
  </header>
)

HeaderContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
