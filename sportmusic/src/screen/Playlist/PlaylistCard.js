import React   from 'react'
import {CardContent, CardMedia, Typography } from '@material-ui/core'
import {CardFoto, CardText,CardProduct , CardConteinerPlaylist} from './styled';


const PlaylistCard = (props) => {
    return(
    <CardConteinerPlaylist> 
      <CardProduct>
        <CardText>
          <CardContent >
            <Typography  style={{ color:" white" }} variant="h5">
                  {props.title}
            </Typography>
            <Typography   style={{ color:" white" }}variant="subtitle1" color="textSecondary">
                  {props.subtitle}
            </Typography>
              </CardContent>
              <CardFoto>
                <CardMedia
                  component={'img'}
                  height={'120px'}
                  image={props.image}
                />
              </CardFoto>
            </CardText>
      </CardProduct>
    </CardConteinerPlaylist>
  )
}
export default PlaylistCard