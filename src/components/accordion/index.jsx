import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import st from './styles.module.scss';

const Accordion = ({ children }) => (
	<ul>
		{children.map((child) => (
			<AccordionItem key={child.key}>{child}</AccordionItem>
		))}
	</ul>
);

const AccordionItem = ({ children }) => {
	const [collapse, setCollapse] = useState(false);

	const toggle = (e) => {
		e.preventDefault();
		const parent = e.target.parentElement.parentElement;
		const body = e.target.parentElement.nextElementSibling;
		setCollapse(!collapse);
		parent.setAttribute('data-accordion-open', !collapse);
		body.hidden = collapse;
	};

	const changeProps = () =>
		React.Children.map(children, (child) => React.cloneElement(child, {
			accordionHeader: true,
		}));

	return (
		<li className={st.accordion__item} role="region">
			<h3>
				<button
					className={st.accordion__header}
					type="button"
					aria-expanded={collapse}
					onClick={toggle}
				>
					{children.props.question}
					<Icon hidden filename="chevron" parentClass={st.accordion__icon} />
				</button>
			</h3>

			<div className={st.accordion__body} hidden>
				{changeProps()}
			</div>
		</li>
	);
};

Accordion.propTypes = {
	children: PropTypes.node.isRequired,
};
AccordionItem.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Accordion;
