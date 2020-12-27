import React from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

const InnerScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:black;
  display: flex;
  flex-direction: column;
`

const App = () => {
  return( 
    <BrowserRouter>
    <InnerScreenContainer>
      <Router/>
    </InnerScreenContainer>
    </BrowserRouter>
    
  )
}
export default App

