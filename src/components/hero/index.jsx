import React from "react"
import Heading from "../heading"
import st from "./styles.module.scss"

const Hero = () => (
  <div className={st.hero}>
    <Heading
      subtitle="plan your life"
      title={{ text: `Increase your productivity`, strongs: [2] }}
      h1
    />
  </div>
)

export default Hero
