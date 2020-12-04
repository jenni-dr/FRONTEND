import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
//import {goToLogin} from '../routes/Coordinator'
//import Button from '@material-ui/core/Button'
import {Menu,Imagem ,Leter,Botão} from './styled'
import Music from '../../assets/musics.png'
import { goToLogin, goToSignUp } from '../../routes/Coordinator'


const HomePage = () => {
    const history = useHistory()
  return(
<div> 
  <AppBar>
    <Menu>
    <Leter>
    <Imagem src={Music} alt={'Music'}/>
      Sport <br></br>
     Music
    </Leter>
    </Menu>
    </AppBar>
    <Botão onClick={() => goToLogin(history)}>Área do Administrador</Botão>
    <Botão onClick={() => goToSignUp(history)}>Quero me Candidatar</Botão>
    </div>
   
  )
}
export default HomePage