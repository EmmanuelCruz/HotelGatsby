import * as React from "react"
import Layout from '../components/Layout.js'
import ImagenHotel from "../components/ImagenHotel.js"
import ContenidoInicio from "../components/ContenidoInicio.js"

const IndexPage = () => (
  <Layout>
    <ImagenHotel />
    <ContenidoInicio />
  </Layout>
)

export const Head = () => <h1 title="Home" />

export default IndexPage
