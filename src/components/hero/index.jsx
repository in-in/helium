import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Chart from "react-apexcharts"
import Container from "../container"
import Heading from "../heading"
import Text from "../text"
import Icon from "../icon"
import st from "./styles.module.scss"

const chartColors = {
  blue_cornflower_l_10: `#6b8bff`,
}

const chartData = {
  options: {
    chart: {
      toolbar: false,
      type: `area`,
      sparkline: { enabled: true },
    },
    stroke: {
      width: 3,
    },
    colors: [chartColors.blue_cornflower_l_10],
    fill: {
      type: `gradient`,
      gradient: {
        type: `vertical`,
        colorStops: [
          {
            offset: 0,
            color: chartColors.blue_cornflower_l_10,
            opacity: 0.4,
          },
          {
            offset: 100,
            color: chartColors.blue_cornflower_l_10,
            opacity: 0,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 6,
      colors: `white`,
      strokeWidth: 2,
      strokeColor: chartColors.blue_cornflower_l_10,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          fillColor: `transparent`,
          strokeColor: `transparent`,
          size: 5,
        },
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: `transparent`,
          strokeColor: `transparent`,
          size: 5,
        },
      ],
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
  },
  series: [
    {
      name: `productivity`,
      data: [[10, 8], [15, 10], [35, 15], [60, 40], [90, 70], [100, 72]],
    },
  ],
}

const clouds = Array(13).fill(0)

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSectionHeadingsJson(filter: { section: { eq: "hero" } }) {
        nodes {
          ...sectionHeadings
        }
      }
    }
  `)

  return (
    <section className={st.hero}>
      {data.allSectionHeadingsJson.nodes.map(item => (
        <Container key={item.id}>
          <div className={st.hero__heading}>
            <Heading {...item} />
          </div>
          <div className={st.hero__caption}>
            <Text>{item.caption}</Text>
          </div>
        </Container>
      ))}

      {typeof document !== `undefined` && (
        <Chart
          className={st.hero__chart}
          options={chartData.options}
          series={chartData.series}
          type="area"
          width="100%"
          height="100%"
        />
      )}
      {clouds.map((item, i) => (
        <Icon
          filename="cloud"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          classname={`${st[`hero__cloud${i + 1}`]}`}
        />
      ))}
    </section>
  )
}

export default Hero
