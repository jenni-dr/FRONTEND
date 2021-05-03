import styled from 'styled-components'
import { Select, TextField } from '@material-ui/core'


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
export const Selet = styled(Select)`
  margin-top:10px;
  height: 40px;
  font-size: 10px;
  width: 50vw;
  max-width:200px;
  border: 1px solid #6699ff;
  margin-bottom: 1em;
  padding-left: 0.5em;
  background:#0099cc;
`
export const Botão = styled.button`
  max-width: 450px;
  border-radius:15px;
  width:150px;
  height:40px;
  margin-top:80px;
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

export const Container = styled.div`
  width:80vw;
  height:75vh;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`
export const InputPost = styled(TextField)`
  height:50px;
  font-size: 10px;
  width: 70vw;
  max-width:350px;
  border: 1px solid #6699ff;
  margin-bottom: 1em;
  padding-left: 0.5em;
  background-color:#0099cc;
  border-radius:15px;
`
export const PostContainer = styled.div`
  margin-top:40px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  width: 80vw;
  max-width:200px;
  height: 15em;
  margin-bottom: 1em;
  padding-bottom: 1em;
  text-align:center;
`  