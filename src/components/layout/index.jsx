import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import "../../styles/index.scss"

const Layout = ({ children }) => (
	<>
		<Helmet>
			<html lang="en" />
			<title>Helium</title>
			<meta
				name="description"
				content="Project management platform for agile developers and designers as well as project managers who need a beautiful tool that makes their work really pleasant."
			/>
			<style>{`
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
