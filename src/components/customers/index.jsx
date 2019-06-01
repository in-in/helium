import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Icon from "../icon"
import st from "./styles.module.scss"

const Customers = () => {
  const data = useStaticQuery(graphql`
    query {
      allCustomersJson(sort: { fields: name, order: ASC }) {
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
    <section className={st.customers}>
      <Container>
        <div className={st.customers__wrapper}>
          <ul className={st.customers__list}>
            {data.allCustomersJson.edges.map(item => (
              <li className={st.customers__item} key={item.node.name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.node.url}
                  className={st.customers__link}
                  title={item.node.name
                    .split(` `)
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(` `)}
                >
                  <Icon
                    filename={`customers/${item.node.name.split(` `).join(``)}`}
                    classname={st.customers__logo}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Customers
