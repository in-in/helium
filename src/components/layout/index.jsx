import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
	<>
		<Helmet
			title="Helium"
			meta={[{ name: `description`, content: `Helium landing page` }]}
		>
			<html lang="en" />
		</Helmet>
		<main>{children}</main>
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
