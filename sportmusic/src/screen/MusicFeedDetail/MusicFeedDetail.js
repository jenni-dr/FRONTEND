import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { AddRecipeButton, FeedContainer } from './styled'
import useRequestData from '../../hooks/useRequestData'
import MusicCard from './MusicCard'
import { Add } from '@material-ui/icons'
import Loading from '../../components/Loading/Loading'
import { goToMusicFeed } from '../../routes/Coordinator'

const MusicFeedDetail = () => {
    useProtectedPage()
    const history = useHistory()
    const music = useRequestData([
        
    ], '/music/all')
  
    const renderMusic = () => { 
      music.map((item) => {
        return (
          <MusicCard
            key={item.id}
            //onClick={() => goToRecipeDetail(history, item.recipe_id)}
            title={item.title}
            author={item.author}
            date={item.date}
            file={item.file}
          />
        )
      })
    }
  
    return (
      <>
        <FeedContainer>
          {music.length > 0 ? renderMusic() : <Loading/>}
        </FeedContainer>
        <AddRecipeButton color={'primary'} onClick={() => goToMusicFeed(history)}>
          <Add/>
        </AddRecipeButton>
  
      </>
    )
  }
  
  export default MusicFeedDetail
  