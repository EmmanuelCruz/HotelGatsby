import React from 'react'
import { css } from '@emotion/react';
import Navegacion from './Navegacion';
import styled from '@emotion/styled'
import { Link } from 'gatsby';

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
`

const Footer = ({title}) => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          padding: 1rem;
          margin-top: 5rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px){
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navegacion />
          <EnlaceHome to='/'>
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
        </div>
      </footer>

      <p
        css={css`
          text-align: center;
          color: #FFF;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >{title}. Todos los derechos reservados {year} &copy;</p>
    </>
  )
}

export default Footer
