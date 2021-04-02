import React from 'react';
import GlobalStyle from './src/globalStyles';
import Helmet from 'react-helmet'

export const wrapPageElement = ({element}) => (
    <>
    <GlobalStyle />
    <Helmet>
    <link
      rel="preload"
      onload="this.rel = 'stylesheet'"
      as="style"
      href={'/fonts/fonts.css'} />
      <noscript />

        </Helmet>
    {element}
    </>
)