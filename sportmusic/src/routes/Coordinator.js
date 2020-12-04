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
    history.push('/music')
  }
  
  export const goToAddMusic = (history) => {
    history.push('/adicionarmusic')
  }
  
  export const goToMusicDetail = (history, id) => {
    history.push(`/music/${id}`)
  }
  