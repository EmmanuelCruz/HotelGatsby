import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const TextoImagen = styled.div`
  background-image: linear-gradient(to top, rgba(34, 49, 63, .9), rgba(34, 49, 63, .9));
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0;
  }

  p {
    font-size: 2rem;
  }
`
const ImagenHotel = () => {

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag='section' fluid={image.sharp.fluid} fadeIn='soft'>
      <TextoImagen>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextoImagen>
    </ImageBackground>
  )
}

export default ImagenHotel
