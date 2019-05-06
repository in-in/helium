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
    <ul className={st.social}>
      {data.allSocialItemsJson.edges.map(item => (
        <li className={st.social__item} key={item.node.name}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.node.url}
            className={st.social__link}
          >
            <Icon
              filename={`social/${item.node.name}`}
              classname={st.social__icon}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
