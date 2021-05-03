import React   from 'react'
import Header from '../../components/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import PlaylistCard from './PlaylistCard';
import PlaylistForm from './PlaylistForm';

const PlaylistPage = () => {
    useProtectedPage()
    const playlists = useRequestData([], '/music/playlist/all')
    return(
      <div>
        <Header/>
        <PlaylistForm/>
      <div>
        {playlists.map((item) => {
          return(
             <PlaylistCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          )
        })}
      </div>
      </div>
  )
}
export default PlaylistPage