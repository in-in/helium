import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../container"
import Heading from "../heading"
import Carousel from "../carousel"
import ArticlePreview from "../article-preview"
import st from "./styles.module.scss"

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allSectionHeadingsJson(filter: { section: { eq: "blog" } }) {
				nodes {
					...sectionHeadings
				}
			}
			allArticlesJson {
				nodes {
					id
					title
					excerpt
					images {
						alt
						width
						sources {
							x1
							x2
							x3
						}
					}
				}
			}
		}
	`)

	return (
		<section className={st.blog}>
			<Container>
				{data.allSectionHeadingsJson.nodes.map(item => (
					<Heading {...item} key={item.id} parentClass={st.blog__header} />
				))}
				<div className={st[`blog__carousel-wrapper`]}>
					<Carousel parentClass={st.blog__carousel}>
						{data.allArticlesJson.nodes.map(item => {
							const { title, excerpt, images, id } = item
							return (
								<ArticlePreview
									title={title}
									excerpt={excerpt}
									images={images}
									key={id}
								/>
							)
						})}
					</Carousel>
				</div>
			</Container>
		</section>
	)
}

export default Blog
