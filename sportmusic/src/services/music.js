import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {  goToAlbum, goToArtist, goToGenero, goToMusicList, goToPlaylist } from '../routes/Coordinator'


export const addMusic = (body,history) => {
    console.log(body.genre=body.genre.split(","))
axios.post(`${BASE_URL}/music/createMusic`,body, {
    headers: {
        Authorization:localStorage.getItem("token")
      }
  }).then((response) => {
      console.log(response)
      alert('Musica criado com sucesso!')
      goToMusicList(history)
      }
    ).catch((error) => {
        console.log(error)
        console.log(body.genre)
       alert('Não foi possível criar uma musica, tente novamente')
      }
    )
  }


  export const criarPlaylist = (body,history) => {
   axios.put(`${BASE_URL}/music/createPlaylist`,body, {
    headers: {
        Authorization:localStorage.getItem("token")
      }
  }).then((response) => {
      console.log(response)
      alert('Playlist criado com sucesso!')
      goToPlaylist(history)
      }
    ).catch((error) => {
        console.log(error)
        console.log(body)
       alert('Não foi possível criar uma playlist, tente novamente')
      }
    )
  }

  
  export const criarGenero = (body,history) => {
    axios.post(`${BASE_URL}/music/createGenre`,body, {
     headers: {
         Authorization:localStorage.getItem("token")
       }
   }).then((response) => {
       console.log(response)
       alert('Gênero criado com sucesso!')
       goToGenero(history)
       }
     ).catch((error) => {
         console.log(error)
         console.log(body)
        alert('Não foi possível criar uma gênero, tente novamente')
       }
     )
   }

   export const criarAlbum = (body,history) => {
    axios.post(`${BASE_URL}/music/createAlbum`,body, {
     headers: {
         Authorization:localStorage.getItem("token")
       }
   }).then((response) => {
       console.log(response)
       alert('Álbum criado com sucesso!')
       goToAlbum(history)
       }
     ).catch((error) => {
         console.log(error)
         console.log(body)
        alert('Não foi possível criar uma álbum, tente novamente')
       }
     )
   }

   export const criarArtist = (body,history) => {
    axios.post(`${BASE_URL}/music/createArtist`,body, {
     headers: {
         Authorization:localStorage.getItem("token")
       }
   }).then((response) => {
       console.log(response)
       alert('Artist criado com sucesso!')
       goToArtist(history)
       }
     ).catch((error) => {
         console.log(error)
         console.log(body)
        alert('Não foi possível criar uma artist, tente novamente')
       }
     )
   }

 