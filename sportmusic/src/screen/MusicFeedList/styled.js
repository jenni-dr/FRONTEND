import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import { Typography } from '@material-ui/core'


export const CardConteiner2 = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
`
export const CardBotao = styled.div`
  margin-top:50px;
`
export const CardConteiner = styled.div`
  justify-content:center;
  margin-top:50px;
  width: 300px;
  margin: 25px;
  text-align:center;
  background-color:#0099cc;
`
export const MusicText = styled(Typography)`
  color:white;
`
export const CardControler= styled.audio`
  width: 200px;
  margin:10px;
  margin-left:50px;
`
export const AddMusicButton = styled(Fab)`
  left: 30px;
  bottom: 40px;
  z-index: 3;
`
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`
export const  ConatainerModal = styled.div`
  display:flex;
  flex-direction: column;
  text-align:center;
  width:200px;
  height:140px;
  background:black;
`
export const ModalCard = styled.div`
  margin-top:100px;
  margin-left:100px; 
  width:200px;
  color:white;
`
export const BotãoModal = styled.button`
  border:none;
  border-radius:10px;
  height:25px;
  background:black;
  color:white;
`
