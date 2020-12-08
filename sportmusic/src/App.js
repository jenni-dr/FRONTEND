import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
//import MainAppBar from './components/AppBar/MainAppBar'

//import Header from './components/Header'

const InnerScreenContainer = styled.div`
  padding-top: 64px;
 
`

const App = () => {
  return( 
<ThemeProvider theme={theme}>
      <BrowserRouter>
      {/* <MainAppBar /> */}
        <InnerScreenContainer>
          
          <Router />
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  )
}
  


export default App

