import { Typography } from '@material-ui/core'
import React   from 'react'
import User from '../../assets/user.png'
import {CardArtist,Imagem} from './styled'

const ArtistCard = (props) => {
    return(
        <CardArtist>
            <Imagem  src={User} alt={'Music'}/>
            <Typography  style={{ color:"#0099cc" }} > 
                {props.name} 
                </Typography>
        </CardArtist>
    )
}
export default ArtistCard