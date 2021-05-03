import React   from 'react'
import {CardAvatar,Imagem} from './styled'
import { Typography } from '@material-ui/core'
import Album from '../../assets/album.png'

const GeneroCard =(props)=>{
    return(
        <CardAvatar  >
            <Imagem src={Album} alt={'Music'}/>
                <Typography  style={{ color:"white" }} > 
                *{props.name} 
                </Typography>
           
        </CardAvatar>
    )
}
export default GeneroCard