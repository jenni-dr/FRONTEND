import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeContainer, ScreenContainer } from './styled'
import Typography from '@material-ui/core/Typography'
import MusicFeedForm from './MusicFeedForm'

const MusicFeedPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Musica</Typography>
        <MusicFeedForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default MusicFeedPage
