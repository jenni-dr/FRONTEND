import React from 'react'
import { useHistory } from 'react-router-dom'
import {Menu,Imagem ,Leter,Container,Footer,Oi,Botão} from './styled'
import Music from '../../assets/musics.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import { goToLogin, goToSignUp } from '../../routes/Coordinator'


const HomePage = () => {
  const history = useHistory()
  return(
    <Container>
      <Menu>
        <Leter>
          <Imagem src={Music} alt={'Music'}/>
            Sport <br></br>Music
        </Leter>
      </Menu>
      <Botão onClick={() => goToLogin(history)}>Login</Botão>
      <Botão onClick={() => goToSignUp(history)}>Cadastre-se
      </Botão>
      <Oi> 
        <Footer src={Facebook}   alt={'Music'}/>
        <Footer src={Instagram} alt={'Music'}/>
        <Footer src={Twitter} alt={'Music'}/>
     </Oi>
    </Container>
  )
}
export default HomePage