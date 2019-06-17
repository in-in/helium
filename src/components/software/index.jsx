import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Text from "../text"
import st from "./styles.module.scss"

const Software = () => {
  const data = useStaticQuery(graphql`
    query {
      allSectionHeadingsJson(filter: { section: { eq: "software" } }) {
        edges {
          node {
            id
            subtitle
            title {
              text
              accent
            }
            big
            left
            caption
          }
        }
      }
    }
  `)
  return (
    <section className={st.software}>
      <Container>
        <div className={st.software__wrapper}>
          {data.allSectionHeadingsJson.edges.map(item => (
            <div className={st.software__desc} key={item.node.id}>
              <Heading key={item.node.subtitle} {...item.node} />
              <Text key={item.node.caption}>{item.node.caption}</Text>
            </div>
          ))}
          <div className={st.software__showcase}>software__showcase</div>
        </div>
      </Container>
    </section>
  )
}

export default Software
