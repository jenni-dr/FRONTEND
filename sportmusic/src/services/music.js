// import axios from 'axios'
// //import { BASE_URL } from '../constants/urls'
// import { goToDetailMusic } from '../routes/Coordinator'


// export const addMusic = (body,history) => {
//   console.log()
//   body.genresIds =body.genresIds.split(",")
//   for (let i =0; i<body.genresIds.length; i++){
//     body.genresIds[i] = body.genresIds[i].trim()
//  }
//   axios.post(`https://backend-fullstack-labenu.herokuapp.com/music/createMusic`,body, {
//     headers: {
//         Authorization:localStorage.getItem("token")
//       }
//   }).then((response) => {
//       console.log(response)
//       alert('Musica criado com sucesso!')
//       goToDetailMusic(history)
//       }
//     ).catch((error) => {
//         //console.log(error.response.data)
//         console.log(body.genresIds)
//        alert('Não foi possível criar uma musica, tente novamente')
//       }
//     )
//   }


 