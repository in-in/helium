import React from "react"
import st from "./styles.module.scss"
import Heading from "../heading"

const Software = () => (
  <div className={st.software}>
    <Heading
      title="Desktop and mobile app"
      subtitle={{ text: `Plan and manage`, strongs: [0, 2] }}
    />
  </div>
)

export default Software
