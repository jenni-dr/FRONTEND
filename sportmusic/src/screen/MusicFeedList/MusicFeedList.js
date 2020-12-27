import React   from 'react'
import {AddMusicButton,CardConteiner2,CardBotao} from './styled'
import { goToMusicFeed } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import MusicCard from './MusicCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header';
import { Add } from '@material-ui/icons';
import axios from 'axios'


const MusicFeedList = () => {
  useProtectedPage()
  const history = useHistory()
  const musics = useRequestData([],'/music/all')

  const removeMusic = (musicId) => {
    console.log(musicId)
  axios
    .delete(
      `http://localhost:3003/music/delete/${musicId}`,{ 
      headers: {
        Authorization: localStorage.getItem('token')
      }
      })
      .then((response) => {
       console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
 }
  return( 
  <>
    <Header/>
    <CardBotao>
      <AddMusicButton  style={{ color:"white" }} onClick={() => goToMusicFeed(history)}>
        <Add style={{ color:"black" }}/>
      </AddMusicButton>
    </CardBotao>
    <br/><br/>
    <CardConteiner2> 
      {musics.map((item) => {
        return (
        <MusicCard
          key={item.id}
          title={item.title}
          author={item.author}
          date={item.date}
          file={item.file}
          genre={item.genre}
          album={item.album}
          musicId={item.id}
          removeMusic={removeMusic}
       />
       )
      })}
    </CardConteiner2>
  </>
  )
}
export default MusicFeedList
  