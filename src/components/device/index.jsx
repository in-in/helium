import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../icon"
import Picture from "../picture"
import st from "./styles.module.scss"

const Device = () => {
  const data = useStaticQuery(graphql`
    query {
      laptop: allDeviceJson(filter: { device: { eq: "laptop" } }) {
        nodes {
          ...device
        }
      }
    }
  `)

  return (
    <div className={st.device}>
      <div className={st.device__laptop}>
        <Icon filename="laptop" classname={st.device__mockup_laptop} />
        <Picture
          data={data.laptop.nodes[0].images}
          classname={st.device__picture}
        />
      </div>
    </div>
  )
}

export default Device
