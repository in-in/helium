import React, { Fragment } from "react"
import PropTypes from "prop-types"
import st from "./styles.module.scss"

const strongify = ({ text, accent }) => {
  const result = text.split(` `).map((word, i) => {
    if (accent && accent.some(el => el === i)) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <strong key={i} className={st.accent}>
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

const Heading = ({ title, subtitle, left, big }) => (
  <div className={left ? st.headingLeft : st.heading}>
    <p className={st.subtitle}>{subtitle}</p>
    {big ? (
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
    accent: PropTypes.array,
  }).isRequired,
  left: PropTypes.bool,
  big: PropTypes.bool,
}

Heading.defaultProps = {
  left: false,
  big: false,
}

export default Heading
