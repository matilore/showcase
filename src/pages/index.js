import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import "@fontsource/permanent-marker" // Defaults to weight 400.



const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(283.96deg, rgba(213, 29, 217, 0.5) 0%, rgba(220, 41, 202, 0) 100%), #252F84;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  font-family: Permanent Marker, cursive;
`


const IndexPage = () => (
  <Layout>
    <Main>
      <Title>
      COMING SOON
      </Title>
    </Main>
  </Layout>
)

export default IndexPage
