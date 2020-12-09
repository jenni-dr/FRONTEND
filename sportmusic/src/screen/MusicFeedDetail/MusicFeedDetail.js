import axios from 'axios'
import React, {useEffect, useState} from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { AddRecipeButton, FeedContainer } from './styled'
//import useRequestData from '../../hooks/useRequestData'
import MusicCard from './MusicCard'
import { Add } from '@material-ui/icons'
import Loading from '../../components/Loading/Loading'
import { goToMusicFeed } from '../../routes/Coordinator'

const MusicFeedDetail = () => {
    useProtectedPage()
    const history = useHistory()
    const [music ,setMusic] = useState([])


    const getListMusic = () =>{
        axios
           .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jennifer/trips`)
          
           .then((response)=> {
             setMusic(response.data.trips)
             console.log(response)
           })
           .catch((err)=> {
             console.log(err)
           });
         }
         useEffect(() => {
           getListMusic()
         }, [])
        
  
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
  