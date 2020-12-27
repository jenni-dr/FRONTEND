import React from 'react'
import MusicLogo from '../../assets/musics.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import {Leter, LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
     <Leter> 
        <LogoImage alt={LogoImage} src={MusicLogo}/>
          Sport <br></br>Music
      </Leter>
      <SignUpForm />
    </ScreenContainer>
  )
}
export default SignUpPage
