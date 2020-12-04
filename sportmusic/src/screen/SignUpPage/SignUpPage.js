import React from 'react'
import MusicLogo from '../../assets/music3.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'

import { LogoImage } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage'


const SignUpPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
    <LogoImage alt={LogoImage} src={MusicLogo}/>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage
