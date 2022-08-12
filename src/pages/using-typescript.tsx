// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql, HeadFC } from "gatsby"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <h1>
    Gatsby supports <b>TypeScript by default</b>
  </h1>
)

export const Head: HeadFC<DataProps> = () => <h1 title="Using TypeScript" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
