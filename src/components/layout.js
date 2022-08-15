import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import { css, Global } from '@emotion/react';
import Footer from './Footer';
import useSeo from '../hooks/useSeo';

const Layout = (props) => {

  const seo = useSeo()
  const { siteName, fallbackSeo : { description, title}} = seo

  return (
    <>
      <Global 
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }
          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: 'Roboto', serif;
          }
          h1 {
            font-family: 'PT Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@700&display=swap" rel="stylesheet" />
        <meta name='description' content={description} />
      </Helmet>

      <Header />
      {props.children}

      <Footer title={title}/>
    </>
  )
}

export default Layout
