import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Hero from '../components/hero';
import Customers from '../components/customers';
import Software from '../components/software';
import About from '../components/about';
import Stats from '../components/stats';
import Blog from '../components/blog';
import Testimonials from '../components/testimonials';
import Help from '../components/help';
import Pricing from '../components/pricing';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';

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
		<Help />
		<Pricing />
		<Newsletter />
		<Footer />
	</Layout>
);

export default IndexPage;
