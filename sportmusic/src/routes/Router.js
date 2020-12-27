import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../screen/ErrorPage/ErrorPage'
import LoginPage from '../screen/LoginPage/LoginPage'
import SignUpPage from '../screen/SignUpPage/SignUpPage'
import MusicFeedPage from '../screen/MusicFeedPage/MusicFeedPage'
import HomePage from '../screen/Home/HomePage'
import MusicFeedList from '../screen/MusicFeedList/MusicFeedList'
import MusicFeedDetail from '../screen/MusicFeedDetail/MusicFeedDetail'
import PlaylistPage from '../screen/Playlist/PlaylistPage'
import GeneroPage from '../screen/Genero/GeneroPage'
import AlbumPage from '../screen/Album/AlbumPage'
import ArtistPage from '../screen/Artist/ArtistPage'


const Router = (props) => {
  return(
      <Switch>
        <Route exact path={'/'}>
          <HomePage />
         </Route>
        <Route exact path={'/login'}>
          <LoginPage />
         </Route>
        <Route exact path={'/cadastro'}>
          <SignUpPage />
        </Route>
          <Route exact path={'/addmusic'}>
          <MusicFeedPage/>
        </Route>
        <Route exact path={'/music'}>
          <MusicFeedList/>
        </Route>
         <Route exact path={'/music/:id'}>
          <MusicFeedDetail/>
        </Route>
        <Route exact path={'/playlist'}>
          <PlaylistPage/>
        </Route>
        <Route exact path={'/genero'}>
          <GeneroPage/>
        </Route>
        <Route exact path={'/album'}>
          <AlbumPage/>
        </Route>
        <Route exact path={'/artist'}>
          <ArtistPage/>
        </Route>
        <Route>
          <ErrorPage/> 
        </Route> 
      </Switch>
  )
}
export default Router
