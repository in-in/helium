import React from "react"
import PropTypes from "prop-types"
import Container from "../container"
import Logo from "../logo"
import Social from "../social"
import Button from "../button"
import st from "./styles.module.scss"

const HeaderContent = ({ children }) => (
	<div className={st.header__content}>{children}</div>
)

const Header = () => (
	<header className={st.header}>
		<Container>
			<HeaderContent>
				<div className={st.header__item_logo}>
					<Logo />
				</div>
				<div className={st.header__item_social}>
					<Social />
				</div>
				<div className={st.header__item_button}>
					<Button variant="primary">Get started</Button>
				</div>
			</HeaderContent>
		</Container>
	</header>
)

HeaderContent.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Header
