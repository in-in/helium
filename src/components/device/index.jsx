import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../icon"
import Picture from "../picture"
import st from "./styles.module.scss"

const Device = () => {
	const data = useStaticQuery(graphql`
		query {
			laptop: allDeviceJson(filter: { device: { eq: "laptop" } }) {
				nodes {
					...device
				}
			}
			phone: allDeviceJson(filter: { device: { eq: "phone" } }) {
				nodes {
					...device
				}
			}
			tablet: allDeviceJson(filter: { device: { eq: "tablet" } }) {
				nodes {
					...device
				}
			}
		}
	`)

	return (
		<div className={st.device}>
			<div className={st.device__item_phone}>
				<Icon filename="device/phone" classname={st.device__mockup} />
				<Picture
					data={data.phone.nodes[0].images}
					classname={st.device__picture_phone}
				/>
			</div>
			<div className={st.device__item_laptop}>
				<Icon filename="device/laptop" classname={st.device__mockup} />
				<Picture
					data={data.laptop.nodes[0].images}
					classname={st.device__picture_laptop}
				/>
			</div>
			<div className={st.device__item_tablet}>
				<Icon filename="device/tablet" classname={st.device__mockup} />
				<Picture
					data={data.tablet.nodes[0].images}
					classname={st.device__picture_tablet}
				/>
			</div>
		</div>
	)
}

export default Device
