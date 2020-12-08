import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData)
  const [candidates,setCandidates]= useState([{id: "6dc15863-0689-48d9-8d82-257ce17c4445",
  title: "DevMusic",
  author: "0604b6e0-6c53-473b-aabe-87dad25b8176",
  date: "1606827926519",
  file: "url da música" } ])


  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [endpoint])

  return (data)
}

export default useRequestData
