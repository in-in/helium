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

const Heading = ({ title, subtitle }) => (
  <div className={st.heading}>
    <h1 className={st.title}>{title}</h1>
    <p className={st.subtitle}>{strongify(subtitle)}</p>
  </div>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.shape({
    text: PropTypes.string,
    strongs: PropTypes.array,
  }).isRequired,
}

export default Heading
