import React from 'react';
import Icon from '../icon';
import st from './styles.module.scss';

const devices = ['phone', 'laptop', 'tablet'];

const Device = () => (
	<ul className={st.device}>
		{
			devices.map((name) => (
				<li className={st[`device__item_${name}`]}>
					<Icon filename={`device/${name}`} parentClass={st.device__mockup} />
					<Icon
						filename={`device/device_${name}`}
						parentClass={st[`device__picture_${name}`]}
					/>
				</li>
			))
		}
	</ul>
);
export default Device;
