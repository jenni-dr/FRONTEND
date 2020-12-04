import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { goToMusicFeed } from '../../routes/Coordinator'


export const login = (body, history) => {
   axios.post(`${BASE_URL}/user/login`, body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToMusicFeed(history)
        console.log(response)
        })
      .catch((error) => {
        console.log(error)
        
        alert("Falha no Login, tente novamente")
      })
  }

  export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
      .then((response)=>{
        localStorage.setItem('token', response.data.token)
        goToMusicFeed(history)
        })
      .catch((error) => {
        console.log(error)
        alert("Falha no Cadastro, tente novamente")
      })
  }
  