import React from 'react';
import PropTypes from 'prop-types';
import ReactIdSwiper from 'react-id-swiper/lib/ReactIdSwiper.custom';
import {
	Swiper,
	Navigation,
	Pagination,
	A11y,
	EffectFade,
	Lazy,
} from 'swiper/js/swiper.esm';
import Icon from '../icon';
import st from './styles.module.scss';

const Carousel = ({ children, parentClass, nav }) => {
	const params = {
		Swiper,
		modules: [Navigation, Pagination, A11y, EffectFade, Lazy],
		containerClass: `${st.carousel__container}`,
		WrapperEl: 'ul',
		wrapperClass: `${st.carousel__wrapper}`,
		slideClass: `${st.carousel__slide}`,
		slideActiveClass: `${st.carousel__slide_active}`,
		loop: true,
		effect: 'fade',
		preloadImages: false,
		lazy: true,
		pagination: {
			el: `.${st.carousel__pagination}`,
			clickable: true,
			bulletClass: `${st.carousel__bullet}`,
			bulletActiveClass: `${st.carousel__bullet_active}`,
		},
		navigation: {
			prevEl: nav && `.${st.carousel__button_prev.replace(' ', '.')}`,
			nextEl: nav && `.${st.carousel__button_next.replace(' ', '.')}`,
		},
		renderPrevButton: () => (
			<button type="button" className={st.carousel__button_prev}>
				<Icon filename="long-arrow-l" parentClass={st.carousel__icon} />
			</button>
		),
		renderNextButton: () => (
			<button type="button" className={st.carousel__button_next}>
				<Icon filename="long-arrow-r" parentClass={st.carousel__icon} />
			</button>
		),
	};

	return (
		<ReactIdSwiper {...params}>
			{children.map((child, i) => (
				// eslint-disable-next-line react/no-array-index-key
				<li key={i} className={parentClass}>
					{child}
				</li>
			))}
		</ReactIdSwiper>
	);
};

Carousel.propTypes = {
	children: PropTypes.node.isRequired,
	parentClass: PropTypes.string,
	nav: PropTypes.bool,
};

Carousel.defaultProps = {
	parentClass: '',
	nav: true,
};

export default Carousel;
