import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../screen/ErrorPage/ErrorPage'
import LoginPage from '../screen/LoginPage/LoginPage'
import SignUpPage from '../screen/SignUpPage/SignUpPage'
import MusicFeedPage from '../screen/MusicFeedPage/MusicFeedPage'
import HomePage from '../screen/Home/HomePage'
import MusicFeedDetail from '../screen/MusicFeedDetail/MusicFeedDetail'
//import ErrorPage from '../screens/ErrorPage/ErrorPage'

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
          <MusicFeedDetail/>
        </Route>
        {/* <Route exact path={'/music/:id'}>
          <MusicDetailPage/>
        </Route>
        <Route exact path={'/adicionarMusic'}>
          <AddMusicPage/>
        </Route> */} 
        <Route>
          <ErrorPage/> 
        </Route> 
      </Switch>
  )
}

export default Router
