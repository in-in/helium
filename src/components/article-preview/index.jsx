import React from "react"
import PropTypes from "prop-types"
import Picture from "../picture"
import Text from "../text"
import Button from "../button"
import st from "./styles.module.scss"

const ArticlePreview = ({ title, excerpt, images }) => (
	<article className={st[`article-preview`]}>
		<figure className={st[`article-preview__media`]}>
			{images.map(item => (
				<Picture
					data={item}
					key={item[0].sources.x1}
					classname={st[`article-preview__picture`]}
				/>
			))}
		</figure>
		<div>
			<h2 className={st[`article-preview__title`]}>{title}</h2>
			<Text classname={st[`article-preview__excerpt`]}>{excerpt}</Text>
			<Button variant="primary">Read now</Button>
		</div>
	</article>
)

ArticlePreview.propTypes = {
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default ArticlePreview
