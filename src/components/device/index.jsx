import React from "react"
import Icon from "../icon"
import st from "./styles.module.scss"

const Device = () => (
  <div className={st.device}>
    <div className={st.device__laptop}>
      <Icon filename="laptop" classname={st.device__mockup_laptop} />
      <picture className={st.device__picture}>
        <source
          srcSet={`
          https://satyr.io/640x16:9/3?type=png&text=m&texture=cross 1x,
          https://satyr.io/1280x16:9/3?type=png&text=m@2x&texture=cross 2x,
          https://satyr.io/1920x16:9/3?type=png&text=m@3x&texture=cross 3x
          `}
          media="(min-width: 960px)"
        />
        <source
          srcSet={`
          https://satyr.io/432x16:9/2?type=png&text=s&texture=cross 1x,
          https://satyr.io/864x16:9/2?type=png&text=s@2x&texture=cross 2x,
          https://satyr.io/1296x16:9/2?type=png&text=s@3x&texture=cross 3x
          `}
          media="(min-width: 640px)"
        />
        <source
          srcSet={`
          https://satyr.io/296x16:9/1?type=png&text=xs&texture=cross 1x,
          https://satyr.io/592x16:9/1?type=png&text=xs@2x&texture=cross 2x,
          https://satyr.io/888x16:9/1?type=png&text=xs@3x&texture=cross 3x
          `}
          media="(min-width: 320px)"
        />
        <img
          src="https://satyr.io/640x16:9/5?type=png&text=m+fallback&texture=cross"
          alt="name"
        />
      </picture>
    </div>
  </div>
)

export default Device
