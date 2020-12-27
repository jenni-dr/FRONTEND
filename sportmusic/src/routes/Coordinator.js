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
  
  export const goToMusicList = (history,id) => {
    history.push(`/music`)
  }
  
  export const goToMusicDetail = (history, id) => {
    history.push(`/music/${id}`)
  }
  
  export const goToPlaylist = (history) => {
    history.push('/playlist')
  }

  export const goToGenero = (history) => {
    history.push('/genero')
  }

  export const goToAlbum = (history) => {
    history.push('/album')
  }
  
  export const goToArtist = (history) => {
    history.push('/artist')
  }
 
  