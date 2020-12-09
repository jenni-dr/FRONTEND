import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {Leter,LogoImage, RecipeContainer, ScreenContainer } from './styled'
import MusicFeedForm from './MusicFeedForm'
import MusicLogo from '../../assets/musics.png'

const MusicFeedPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
      <Leter>
        <LogoImage  src={MusicLogo} alt={LogoImage}  />
         Adicione <br></br>sua<br></br>Musica
      </Leter>
        <MusicFeedForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}
export default MusicFeedPage
