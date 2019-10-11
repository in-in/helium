import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import "../../styles/index.scss"

const Layout = ({ children }) => (
	<>
		<Helmet
			title="Helium"
			meta={[{ name: `description`, content: `Helium landing page` }]}
		>
			<html lang="en" />
			<style type="text/css">{`
				svg {
					width: 1em;
					height: 1em;
				}
			`}</style>
		</Helmet>
		<main>{children}</main>
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
