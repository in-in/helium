import React from "react"
import Heading from "../heading"
import st from "./styles.module.scss"

const Hero = () => (
  <div className={st.hero}>
    <Heading
      title="plan your life"
      subtitle={{ text: `Increase your productivity`, strongs: [2] }}
    />
  </div>
)

export default Hero
