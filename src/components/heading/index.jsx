import React, { Fragment } from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const strongify = ({ text, strongs }) => {
  const result = text.split(` `).map((word, i) => {
    if (strongs && strongs.some(el => el === i)) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <strong key={i} className={st.strong}>
          {word}
          {` `}
        </strong>
      )
    }
    // eslint-disable-next-line react/no-array-index-key
    return <Fragment key={i}>{word} </Fragment>
  })
  return result
}

const Heading = ({ title, subtitle, left, h1 }) => (
  <div className={left ? st.headingLeft : st.heading}>
    <p className={st.subtitle}>{subtitle}</p>
    {h1 ? (
      <h1 className={st.titleBig}>{strongify(title)}</h1>
    ) : (
      <h2 className={st.title}>{strongify(title)}</h2>
    )}
  </div>
)

Heading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.shape({
    text: PropTypes.string,
    strongs: PropTypes.array,
  }).isRequired,
  left: PropTypes.bool,
  h1: PropTypes.bool,
}

Heading.defaultProps = {
  left: false,
  h1: false,
}

export default Heading
