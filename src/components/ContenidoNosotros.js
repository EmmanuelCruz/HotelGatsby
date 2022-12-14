import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 678px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: {
        slug: {eq: "Nosotros"}
      }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid (maxWidth: 1200){
              ...GatsbyDatoCmsFluid
            }
          }
        }
    }
    }
  `)

  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0]

  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >{titulo}</h2>
      <Contenido>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
