import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useHistory } from 'react-router-dom'
import { goToLogin} from '../../routes/Coordinator'
import Button from '@material-ui/core/Button'
import { AppBarTitle, ButtonsContainer } from './styled'
import HomeIcon from '@material-ui/icons/Home'


import Typography from '@material-ui/core/Typography'

const MainAppBar = (props) => {
  
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
  }

  const appBarAction = () => {
    const token = localStorage.getItem("token")
    if (token){
      logout()
      
    }
    goToLogin(history)
  }

  return (
    <AppBar>
      <Toolbar>
        <ButtonsContainer>
       
          <Button color={"inherit"}  >
          <HomeIcon />
           <AppBarTitle variant={'h6'}></AppBarTitle>
          </Button>
          <Button color={"inherit"}  onClick={appBarAction}>
            login
            <Typography variant={'h6'}>{}</Typography>
          </Button>
       </ButtonsContainer>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar
