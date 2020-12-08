export const goToHomePage = (history) => {
  history.push('/')
}

export const goToLogin = (history) => {
    history.push('/login')
  }
  
  export const goToSignUp = (history) => {
    history.push('/cadastro')
  }
  
  export const goToMusicFeed = (history) => {
    history.push('/addmusic')
  }
  
  export const goToDetailMusic = (history) => {
    history.push('/music')
  }
  
  export const goToMusicDetail = (history, id) => {
    history.push(`/music/${id}`)
  }
  