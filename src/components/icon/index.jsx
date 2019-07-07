import React from "react"
import PropTypes from "prop-types"

const Icon = ({ filename, classname }) => {
	const req = require.context(`../../images/icons`, true, /\.svg$/)
	const IconTag = req(`./${filename}.svg`)

	return <IconTag className={classname} />
}

Icon.propTypes = {
	filename: PropTypes.string.isRequired,
	classname: PropTypes.string.isRequired,
}

export default Icon
