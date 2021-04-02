import React from 'react';
import GlobalStyle from './src/globalStyles';

export const wrapPageElement = ({element}) => (
    <>
    <GlobalStyle />
    {element}
    </>
)