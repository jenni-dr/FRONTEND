import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import {Menu,  ButtonsContainer, MenuApp } from './styled'
import HomeIcon from '@material-ui/icons/Home'
import { IconButton } from '@material-ui/core'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import { goToHomePage, goToLogin, goToMusicFeed, goToMusicList, goToPlaylist } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'

const MainAppBar = () => {
  const history = useHistory()
  return (
    <Menu>
      <Toolbar>
      <MenuApp> 
          <IconButton>
          <HomeIcon  
           onClick={() =>goToHomePage(history)} 
          style={{ color:"white" }} fontSize="large" />
          </IconButton>
          </MenuApp>
        <ButtonsContainer>
          <IconButton > 
          <LibraryMusicIcon  
          onClick={() => goToMusicList(history)} 
          fontSize="large"
          style={{ color:"white" }}/> 
          </IconButton>
          <IconButton > 
         <AddToHomeScreenIcon
          onClick={()=> goToMusicFeed (history)} 
          fontSize="large" 
          style={{ color:"white" }}/>
         </IconButton>
         <IconButton > 
          <AccountCircleIcon 
           onClick={() =>goToLogin(history)} 
          fontSize="large"
          style={{ color:"white" }}/>
          </IconButton>
        </ButtonsContainer>
      </Toolbar>
    </Menu>
  )
}
export default MainAppBar
