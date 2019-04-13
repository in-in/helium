import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Helium"
      meta={[{ name: `description`, content: `Helium landing page` }]}
    >
      <html lang="en" />
    </Helmet>
    <div className={st.layout}>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
