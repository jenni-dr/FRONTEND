import React from 'react'
import MusicLogo from '../../assets/music3.png'
import Button from '@material-ui/core/Button'
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
//import useProtectedPage from '../../hooks/useProtectedPage'

const LoginPage = () => {
  const history = useHistory()
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage  alt={LogoImage} src={MusicLogo} />

     
      
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          color={'primary'}
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
