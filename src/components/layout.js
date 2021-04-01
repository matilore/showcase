import React from 'react';
import GlobalStyle from '../globalStyles';

const Layout = ({children}) => (
    <>
    <GlobalStyle />
    {children}
    </>
)

export default Layout;