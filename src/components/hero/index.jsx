import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import st from "./styles.module.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSectionHeadingsJson(filter: { section: { eq: "hero" } }) {
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
    <section className={st.hero}>
      <Container>
        {data.allSectionHeadingsJson.edges.map(item => (
          <Heading key={item.node.subtitle} {...item.node} />
        ))}
      </Container>
    </section>
  )
}

export default Hero
