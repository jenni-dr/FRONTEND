import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import {  goToMusicFeed } from '../routes/Coordinator'

const useProtectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token === true){
      goToMusicFeed(history)
    }
  }, [history])
}

export default useProtectedPage
