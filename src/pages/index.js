import * as React from "react"
import Layout from '../components/Layout.js'
import ImagenHotel from "../components/ImagenHotel.js"
import ContenidoInicio from "../components/ContenidoInicio.js"
import useHabitaciones from "../hooks/useHabitaciones.js"
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import HabitacionPreview from "../components/HabitacionPreview.js"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: .4rem auto 0 auto;
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {

  const habitaciones = useHabitaciones()

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras habitaciones</h2>

      <div>
        <ListadoHabitaciones>
          {habitaciones.map(habitacion => (
            <HabitacionPreview key={habitacion.id} habitacion={habitacion}/>
          ))}
        </ListadoHabitaciones>
      </div>

    </Layout>
  )
}

export default IndexPage
