import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../container';
import Icon from '../icon';
import st from './styles.module.scss';

const Customers = () => {
	const data = useStaticQuery(graphql`
		query {
			allCustomersJson(sort: { fields: name, order: ASC }) {
				nodes {
					id
					name
					url
				}
			}
		}
	`);

	return (
		<section className={st.customers}>
			<Container>
				<h2 className="visually-hidden">Customers</h2>
				<div className={st.customers__wrapper}>
					<ul className={st.customers__list}>
						{data.allCustomersJson.nodes.map((item) => (
							<li className={st.customers__item} key={item.id}>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={item.url}
									className={st.customers__link}
									title={item.name}
									aria-label={item.name}
								>
									<Icon
										filename={`customers/${item.name
											.split(' ')
											.join('_')
											.toLowerCase()}`}
										parentClass={st.customers__logo}
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};

export default Customers;
