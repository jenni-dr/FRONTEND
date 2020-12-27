import React from 'react'
import MusicLogo from '../../assets/musics.png'
import Button from '@material-ui/core/Button'
import {Leter, LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'



const LoginPage = () => {
  const history = useHistory()
  useUnprotectedPage()
  return (
  <ScreenContainer>
    <Leter>
        <LogoImage  alt={LogoImage} src={MusicLogo} />
          Sport <br></br>Music
    </Leter>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          color={'secondary'}
          variant={'text'}
          type={'submit'}
          fullWidth
        >
          Não tem cadastro? Clique aqui!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
