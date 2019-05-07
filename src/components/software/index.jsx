import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import st from "./styles.module.scss"

const Software = () => {
  const data = useStaticQuery(graphql`
    query {
      allSectionHeadingsJson(filter: { section: { eq: "software" } }) {
        edges {
          node {
            subtitle
            title {
              text
              accent
            }
            big
            left
          }
        }
      }
    }
  `)
  return (
    <section className={st.software}>
      <Container>
        {data.allSectionHeadingsJson.edges.map(item => (
          <Heading
            key={item.node.subtitle}
            subtitle={item.node.subtitle}
            title={{
              text: item.node.title.text,
              accent: item.node.title.accent,
            }}
            big={item.node.big}
            left={item.node.left}
          />
        ))}
      </Container>
    </section>
  )
}

export default Software
