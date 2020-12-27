import React from 'react'
import { Button} from '@material-ui/core'
import {Menu,  ButtonsContainer} from './styled'
import Toolbar from '@material-ui/core/Toolbar'
import { goToAlbum, goToArtist, goToGenero, goToPlaylist } from '../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import MainAppBar from './AppBar/MainAppBar'



const Header = () => {
  const history = useHistory()
  return(
  <Menu>
    <MainAppBar/>
    <Toolbar>
      <ButtonsContainer>
        <Button
          onClick={() =>goToPlaylist(history)}
          style={{ color:"white" }}
          variant={'text'}
          size="large"
        >
          Playlist
        </Button>
        <Button
          onClick={() =>goToGenero(history)}
          style={{ color:"#0099cc" }}
          variant={'text'}
          type={'submit'}
          size="large"
        >
          Gênero
        </Button>
        <Button
          onClick={() =>goToAlbum(history)}
          style={{ color:" white" }}
          variant={'text'}
          type={'submit'}
          size="large"
        >
          Álbum
        </Button>
        <Button
          onClick={() =>goToArtist(history)}
          style={{ color:"#0099cc" }}
          variant={'text'}
          type={'submit'}
          size="large"
        >
          Artist
        </Button>
      </ButtonsContainer>
    </Toolbar>
  </Menu>
  )
}
export default Header
