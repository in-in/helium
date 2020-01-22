import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import st from './styles.module.scss';

const Picture = ({ classname, data }) => {
	const query = useStaticQuery(graphql`
		query {
			images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
				nodes {
					publicURL
					extension
				}
			}
		}
	`);

	function setType(ext) {
		switch (ext) {
			case 'jpg':
			case 'jpeg':
				return 'image/jpeg';
			case 'png':
				return 'image/png';
			case 'webp':
				return 'image/webp';
			default:
				return '';
		}
	}

	function getInfo(name) {
		const images = query.images.nodes;
		const types = new Set();
		const sources = {};
		const allURLs = images.filter((i) => i.publicURL.includes(name));
		const paths = allURLs.map((i) => i.publicURL);

		allURLs.forEach((j) => { types.add(j.extension); });
		types.forEach((el) => {
			sources[el] = paths.filter((p) => p.endsWith(`.${el}`));
		});

		return Object.entries(sources);
	}

	return (
		<picture className={classname || st.picture}>
			{data
				.sort((a, b) => b.width - a.width)
				.map((item) => ((item.width > 0) ? (
					getInfo(item.source).map((i) => (
						<source
							key={i[0]}
							srcSet={i[1].map((src, inx) =>
								`${src} ${inx + 1}x`)}
							media={`(min-width: ${item.width}px)`}
							type={setType(i[0])}
						/>
					))
				) : (
					<img
						key={item.alt}
						src={getInfo(item.source)
							.filter((i) => i[0] !== 'webp').map((src) => src[1][0])}
						alt={item.alt}
					/>
				)))}
		</picture>
	);
};

Picture.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	classname: PropTypes.string,
};

Picture.defaultProps = {
	classname: '',
};

export default Picture;
