import React   from 'react'
import {  CardContent, CardMedia, Typography } from '@material-ui/core'
import {CardFoto,CardAlbums,CardActionAlbum} from './styled';


const AlbumCard = (props) =>{
    return(
    <CardAlbums >
      <CardActionAlbum>
        <CardFoto>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="120"
            image="imagem/music-player.png"
            title="Contemplative Reptile"
          />
        </CardFoto>
        <CardContent>
          <Typography  style={{ color:" white" }} variant="p" >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionAlbum>
    </CardAlbums>
    
  )
}
export default AlbumCard