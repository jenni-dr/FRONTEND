import React   from 'react'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { CardConteiner2 } from './styled'
import AlbumCard from './AlbumCard'
import AlbumForm from './AlbumForm'


const AlbumPage = () =>{
    useProtectedPage()
    const albums = useRequestData([], '/music/album/all')

    return(
        <div>
            <Header/>
            <AlbumForm/>
            <CardConteiner2>
            {albums.map((item) => {
                return(
            <AlbumCard
              key={item.id}
              name={item.name}/>
            )
        })}
        </CardConteiner2>
        </div>
    )
}
export default AlbumPage