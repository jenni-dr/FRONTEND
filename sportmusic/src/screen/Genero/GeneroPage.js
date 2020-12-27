import React   from 'react'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import GeneroCard from './GeneroCard'
import GeneroForm from './GeneroForm'


const GeneroPage =()=>{
    useProtectedPage()
    const genres = useRequestData([], '/music/genre/all')

    return(
    <div>
        <Header/>
        <GeneroForm/>
        <div>
            {genres.map((item) => {
                return(
                <GeneroCard
                  key={item.id}
                  name={item.name}
                />
            )
        })}
        </div>
    </div>
    )
}
export default GeneroPage