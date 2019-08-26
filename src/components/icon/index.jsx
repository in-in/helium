import React from "react"
import PropTypes from "prop-types"

const Icon = ({ filename, classname, hidden }) => {
	const req = require.context(`../../images/icons`, true, /\.svg$/)
	const IconTag = req(`./${filename}.svg`)

	return <IconTag aria-hidden={hidden} className={classname} />
}

Icon.propTypes = {
	filename: PropTypes.string.isRequired,
	classname: PropTypes.string.isRequired,
	hidden: PropTypes.bool,
}

Icon.defaultProps = {
	hidden: null,
}

export default Icon
