import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import {Menu,  ButtonsContainer } from './styled'
import HomeIcon from '@material-ui/icons/Home'
import { IconButton } from '@material-ui/core'

const MainAppBar = () => {
  return (
    <Menu>
      <Toolbar>
        <ButtonsContainer>
          <IconButton    color={"secondary"}  >
          <HomeIcon  style={{ color:"white" }} fontSize="large" />
          </IconButton>
        </ButtonsContainer>
      </Toolbar>
    </Menu>
  )
}
export default MainAppBar
