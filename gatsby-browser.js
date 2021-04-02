/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
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
        <noscript/>
    </Helmet>
    {element}
    </>
)