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
        nodes {
          ...sectionHeadings
        }
      }
    }
  `)
  return (
    <section className={st.software}>
      <Container>
        <div className={st.software__wrapper}>
          {data.allSectionHeadingsJson.nodes.map(item => (
            <div className={st.software__desc} key={item.id}>
              <Heading {...item} />
              <div className={st.software__caption}>
                <Text>{item.caption}</Text>
              </div>
            </div>
          ))}
          <div className={st.software__showcase}>software__showcase</div>
        </div>
      </Container>
    </section>
  )
}

export default Software
