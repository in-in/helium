import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import st from "./styles.module.scss"
import Icon from "../icon"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialItemsQuery {
      allSocialItemsJson(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <div className={st.social}>
      {data.allSocialItemsJson.edges.map(item => (
        <a
          href={item.node.url}
          key={item.node.name}
          className={st.social__item}
        >
          <Icon
            filename={`social/${item.node.name}`}
            classname={st.social__icon}
          />
        </a>
      ))}
    </div>
  )
}

export default Social
