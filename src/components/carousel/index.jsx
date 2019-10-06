import React from "react"
import PropTypes from "prop-types"
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom"
import {
	Swiper,
	Navigation,
	Pagination,
	A11y,
	EffectFade,
} from "swiper/js/swiper.esm"
import Icon from "../icon"
import st from "./styles.module.scss"

const Carousel = ({ children, parentClass = `` }) => {
	const params = {
		Swiper,
		modules: [Navigation, Pagination, A11y, EffectFade],
		containerClass: `${st.carousel__container}`,
		wrapperClass: `${st.carousel__wrapper}`,
		slideClass: `${st.carousel__slide}`,
		slideActiveClass: `${st.carousel__slide_active}`,
		loop: true,
		effect: `fade`,
		pagination: {
			el: `.${st.carousel__pagination}`,
			clickable: true,
			bulletClass: `${st.carousel__bullet}`,
			bulletActiveClass: `${st.carousel__bullet_active}`,
		},
		navigation: {
			prevEl: `.${st.carousel__button_prev.replace(` `, `.`)}`,
			nextEl: `.${st.carousel__button_next.replace(` `, `.`)}`,
		},
		renderPrevButton: () => (
			<button type="button" className={st.carousel__button_prev}>
				<Icon hidden filename="long-arrow-l" classname={st.carousel__icon} />
			</button>
		),
		renderNextButton: () => (
			<button type="button" className={st.carousel__button_next}>
				<Icon hidden filename="long-arrow-r" classname={st.carousel__icon} />
			</button>
		),
	}

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<ReactIdSwiper {...params}>
			{children.map((child, i) => (
				// eslint-disable-next-line react/no-array-index-key
				<div key={i} className={parentClass}>
					{child}
				</div>
			))}
		</ReactIdSwiper>
	)
}

Carousel.propTypes = {
	children: PropTypes.node.isRequired,
	parentClass: PropTypes.string.isRequired,
}

export default Carousel
