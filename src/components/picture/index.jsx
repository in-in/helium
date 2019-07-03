import React, { Fragment } from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const Picture = ({ classname, data }) => (
  <picture className={classname || st.picture}>
    {data
      .sort((a, b) => b.width - a.width)
      .map(item => {
        return (
          <Fragment key={item.width}>
            {item.width > 0 ? (
              <source
                srcSet={Object.entries(item.sources).map(i => {
                  return `${i[1]} ${i[0].slice(`1`)}x`
                })}
                media={`(min-width: ${item.width}px)`}
              />
            ) : (
              <img src={item.sources.x1} alt={item.alt} />
            )}
          </Fragment>
        )
      })}
  </picture>
)

Picture.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  classname: PropTypes.string,
}

Picture.defaultProps = {
  classname: ``,
}

export default Picture
