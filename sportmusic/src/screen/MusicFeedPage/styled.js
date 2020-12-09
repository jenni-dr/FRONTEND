import {  Select, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  max-width: 300px;
  align-items: center;
  margin-bottom: 10px;
`
export const MusicFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
  max-width: 300px;
`
export const InputText = styled(TextField)`
  background:#0099cc;
  border-radius:15px ;
`
// export const Title = styled.p`
// color:white;
// `
export const Selet = styled(Select)`
  background:#0099cc;
  border-radius:15px ;
  margin-top:10px;
  width:150px;
`
export const Botão = styled.button`
  max-width: 450px;
  border-radius:15px;
  width:200px;
  height:40px;
  margin-top:10px;
  margin-right:700px;
  margin-left:700px;
  background-color:#0099cc;
  font-family:MingLiU_HKSCS;
  font-size:20px;
  color: white;
` 
export const Leter = styled.h1`
  font-family:MingLiU_HKSCS-ExtB;
  color:white;
  display:flex;
  align-items:center;
`
export const LogoImage = styled.img`
  width: 20vw;
  max-width: 100px;
`