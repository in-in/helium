import React from "react"
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

const Carousel = () => {
	const params = {
		Swiper,
		modules: [Navigation, Pagination, A11y, EffectFade],
		containerClass: `${st.carousel__container}`,
		wrapperClass: `${st.carousel__wrapper}`,
		slideClass: `${st.carousel__slide}`,
		slideActiveClass: `${st.carousel__slide_active}`,
		loop: true,
		effect: `fade`,
		spaceBetween: 50,
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
		<>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<ReactIdSwiper {...params}>
				<div>
					<p>slide 1</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
						officiis sapiente magnam aliquam ullam delectus recusandae,
						inventore similique in esse accusantium nihil earum cum molestiae
						optio omnis maxime deserunt cupiditate.
					</p>
				</div>
				<div>
					<p>slide 2</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
						officiis sapiente magnam aliquam ullam delectus recusandae,
						inventore similique in esse accusantium nihil earum cum molestiae
						optio omnis maxime deserunt cupiditate.
					</p>
				</div>
				<div>
					<p>slide 3</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
						officiis sapiente magnam aliquam ullam delectus recusandae,
						inventore similique in esse accusantium nihil earum cum molestiae
						optio omnis maxime deserunt cupiditate.
					</p>
				</div>
			</ReactIdSwiper>
		</>
	)
}

export default Carousel
