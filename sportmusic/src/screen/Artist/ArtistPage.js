import React   from 'react'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import ArtistCard from './ArtistCard'
import ArtistForm from './ArtistForm'


const ArtistPage = () => {
    useProtectedPage()
    const artists = useRequestData([], '/music/artist/all')

    return(
        <div>
          <Header/>
          <ArtistForm/>
            <div>
            {artists.map((item) => {
                return(
                <ArtistCard
                  key={item.id}
                  name={item.name}
                />
            )
        })}
            </div>
        </div>
    )
}
export default ArtistPage