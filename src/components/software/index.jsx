import React from "react"
import st from "./styles.module.scss"
import Heading from "../heading"

const Software = () => (
  <div className={st.software}>
    <Heading
      subtitle="Desktop and mobile app"
      title={{ text: `Plan and manage`, strongs: [0, 2] }}
      left
    />
  </div>
)

export default Software
