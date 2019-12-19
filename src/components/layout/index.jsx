import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import RobotoRegular from '../../fonts/roboto-v19-latin-regular.woff2';
import QuicksandRegular from '../../fonts/quicksand-v9-latin-regular.woff2';
import '../../styles/index.scss';
import '../../styles/print.scss';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteUrl
					title
				}
			}
		}
	`);
	const { title } = data.site.siteMetadata;

	return (
		<>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta
					name="description"
					content="Project management platform for agile developers and
				designers as well as project managers who need a beautiful tool
				that makes their work really pleasant."
				/>
				<link
					rel="preload"
					href={QuicksandRegular}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={RobotoRegular}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<noscript>
					{`To use ${title}, please enable JavaScript.`}
				</noscript>
				<style>
					{`
				svg {
					width: 1em;
					height: 1em;
				}

				@font-face {
					font-family: Quicksand;
					font-weight: 400;
					font-style: normal;
					font-display: swap;
					src: url(${QuicksandRegular}) format("woff2")
					}

				@font-face {
					font-family: Roboto;
					font-weight: 400;
					font-style: normal;
					font-display: swap;
					src: url(${RobotoRegular}) format("woff2")
					}
			`}

				</style>
			</Helmet>
			<main>{children}</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
