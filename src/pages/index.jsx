import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Section from "../components/section"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Header />
    <Section>
      <Hero />
    </Section>
    <Section>partners</Section>
    <Section>apps</Section>
    <Section>about</Section>
    <Section>stats</Section>
    <Section>blog</Section>
    <Section>testimonials</Section>
    <Section>help</Section>
    <Section>pricing</Section>
    <Section>newsletter</Section>
  </Layout>
)

export default IndexPage
