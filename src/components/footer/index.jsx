import React from 'react';
import Container from '../container';
import Logo from '../logo';
import Social from '../social';
import Text from '../text';
import st from './styles.module.scss';

const Footer = () => (
	<footer className={st.footer}>
		<Container>
			<div className={st.footer__wrapper}>
				<Logo />
				<Social />
				<Text parentClass={st.footer__copyright}>
					Helium &copy;
					{new Date().getFullYear()}
				</Text>
			</div>
		</Container>
	</footer>
);

export default Footer;
