import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Chart from "react-apexcharts"
import Container from "../container"
import Heading from "../heading"
import Text from "../text"
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
    xaxis: {
      type: `numeric`,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
  },
  series: [
    {
      name: `productivity`,
      data: [[10, 8], [15, 10], [35, 15], [60, 40], [90, 70], [100, 72]],
    },
  ],
}

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allSectionHeadingsJson(filter: { section: { eq: "hero" } }) {
        edges {
          node {
            subtitle
            title {
              text
              accent
            }
            big
            left
          }
        }
      }
    }
  `)

  return (
    <section className={st.hero}>
      <Container>
        {data.allSectionHeadingsJson.edges.map(item => (
          <div className={st.hero__heading} key={item.node.subtitle}>
            <Heading {...item.node} />
          </div>
        ))}
        <div className={st.hero__text}>
          <Text>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata.
          </Text>
        </div>
      </Container>
      <Chart
        className={st.hero_chart}
        options={chartData.options}
        series={chartData.series}
        type="area"
        width="100%"
        height="100%"
      />
    </section>
  )
}

export default Hero
