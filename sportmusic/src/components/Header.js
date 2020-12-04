import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
import {goToLogin} from '../routes/Coordinator'
import Button from '@material-ui/core/Button'
import {Menu,Imagem ,Leter} from './styled'
import Music from '../assets/musics.png'


const Header = () => {
  return(
  <AppBar>
    <Menu>
    <Leter>
    <Imagem src={Music} alt={'Music'}/>
      Sport <br></br>
     Music
    </Leter>
    </Menu>
  </AppBar>
  )
}
export default Header
