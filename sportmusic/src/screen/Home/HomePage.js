import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { useHistory } from 'react-router-dom'
//import {goToLogin} from '../routes/Coordinator'
//import Button from '@material-ui/core/Button'
import {Menu,Imagem ,Leter,Containe,Footer,Oi} from './styled'
import Music from '../../assets/musics.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import { goToLogin, goToSignUp } from '../../routes/Coordinator'
import { Button } from '@material-ui/core'


const HomePage = () => {
  const history = useHistory()
  return(
  <Menu>
    <AppBar>
      <Leter>
        <Imagem src={Music} alt={'Music'}/>
        Sport <br></br>Music
      </Leter>
    </AppBar>
    <Containe>
      <Button
        color={'primary'}
        variant={"contained"}
        fullWidth
        onClick={() => goToLogin(history)}>Login</Button>
        <br></br>
      <Button
        color={'primary'}
        variant={'contained'}
        fullWidth
        onClick={() => goToSignUp(history)}>Cadastrar
      </Button>
      <Oi> 
        <Footer src={Facebook}   alt={'Music'}/>
        <Footer src={Instagram} alt={'Music'}/>
        <Footer src={Twitter} alt={'Music'}/>
     </Oi>
    </Containe>
  </Menu>
  )
}
export default HomePage