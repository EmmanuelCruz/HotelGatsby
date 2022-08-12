import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px){
    padding-bottom: 0;
  }
`

const LinkStyle = styled(Link)`
  color: #FFF;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.pagina-actual {
    border-bottom: 2px solid #FFF;
  }
`

const Navegacion = () => {
  return (
    <Nav>
      <LinkStyle activeClassName='pagina-actual' to='/'>Inicio</LinkStyle>
      <LinkStyle activeClassName='pagina-actual' to='/nosotros'>Nosotros</LinkStyle>
    </Nav>
  )
}

export default Navegacion
