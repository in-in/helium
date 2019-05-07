import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Software from "../components/software"

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero />
    <section>partners</section>
    <Software />
    <section>about</section>
    <section>stats</section>
    <section>blog</section>
    <section>testimonials</section>
    <section>help</section>
    <section>pricing</section>
    <section>newsletter</section>
  </Layout>
)

export default IndexPage
