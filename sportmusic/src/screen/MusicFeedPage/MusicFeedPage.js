import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import {Leter,LogoImage, RecipeContainer, ScreenContainer,MenuLogo } from './styled'
import MusicFeedForm from './MusicFeedForm'
import MusicLogo from '../../assets/musics.png'
import MainAppBar from '../../components/AppBar/MainAppBar'

const MusicFeedPage = () => {
  useProtectedPage()
  return (
    <div>
    <MainAppBar/>
    <ScreenContainer>
       <RecipeContainer>
          <Leter>
            <LogoImage  src={MusicLogo} alt={LogoImage}  />
              Adicione <br></br>sua<br></br>Musica
          </Leter>
        <MusicFeedForm/>
      </RecipeContainer>
    </ScreenContainer>
    </div>
  )
}
export default MusicFeedPage
