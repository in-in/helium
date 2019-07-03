import { graphql } from "gatsby"

export const device = graphql`
  fragment device on DeviceJson {
    images {
      alt
      width
      sources {
        x1
        x2
        x3
      }
    }
  }
`

export default device
