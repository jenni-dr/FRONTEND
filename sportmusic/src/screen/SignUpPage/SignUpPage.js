import React from 'react'
import MusicLogo from '../../assets/music3.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'

import { LogoImage } from './styled'
//import useProtectedPage from '../../hooks/useProtectedPage'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
    <LogoImage alt={LogoImage} src={MusicLogo}/>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage
