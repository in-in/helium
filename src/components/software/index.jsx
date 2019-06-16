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
        <div className={st.software__wrapper}>
          <div className={st.software__desc}>
            {data.allSectionHeadingsJson.edges.map(item => (
              <Heading key={item.node.subtitle} {...item.node} />
            ))}
            <Text>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an, insolens gubergren similique est cu. Et vel
              modus congue vituperata.
            </Text>
          </div>
          <div className={st.software__showcase}>software__showcase</div>
        </div>
      </Container>
    </section>
  )
}

export default Software
