import React from 'react'
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import MainAppBar from '../../components/AppBar/MainAppBar'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { MusicContainer, ScreenContainer, MusicControler } from './styled'
import useRequestData from '../../hooks/useRequestData'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const MusicFeddDetail = () => {
    useUnprotectedPage()
    const {id} = useParams()
    const music = useRequestData ([], `/music/${id}`)
  return( 
  <div>
    <MainAppBar/>
    <ScreenContainer>
        <MusicContainer>
            <Typography gutterBottom align={'center'} variant={'h5'} style={{ color:"white"}} >{music.title}</Typography>
            <Typography  style={{ color:"white"}}  >{music.author}</Typography>
            <MusicControler 
              autoplay="autoplay" controls="controls">
              <source src={music.file} type="audio/mp3" />
            </MusicControler>
            <DeleteForeverIcon style={{ color:"red"}}  fontSize="large"  />
        </MusicContainer>
    </ScreenContainer>
  </div>
  )
}
export default MusicFeddDetail

