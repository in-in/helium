import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Customers from "../components/customers"
import Software from "../components/software"
import About from "../components/about"
import Stats from "../components/stats"
import Blog from "../components/blog"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
	<Layout>
		<Header />
		<Hero />
		<Customers />
		<Software />
		<About />
		<Stats />
		<Blog />
		<Testimonials />
		<section>help</section>
		<section>pricing</section>
		<section>newsletter</section>
	</Layout>
)

export default IndexPage
