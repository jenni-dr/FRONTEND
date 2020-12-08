import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToMusicFeed } from '../routes/Coordinator'
//import { goToRecipesFeed } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token){
     goToMusicFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage
