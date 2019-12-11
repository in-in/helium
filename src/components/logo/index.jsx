import React from 'react';
import st from './styles.module.scss';
import Icon from '../icon';

const Logo = () => (
	<a href="/" className={st.logo}>
		<Icon filename="logo" classname={st.logo__icon} />
	</a>
);

export default Logo;
