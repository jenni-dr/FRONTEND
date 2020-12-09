import React from 'react'
import { MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {Selet, InputText,Botão,InputsContainer, MusicFormContainer} from './styled'


const MusicFeedForm = () => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', author: '', date: '', file:"", genre:"",album:""})
  

  // const onClickAddMusic = (event) => {
  //   event.preventDefault()
  //   const element = document.getElementById('addrecipe_form')
  //   const isValid = element.checkValidity()
  //   element.reportValidity()
  //   if (isValid) {
  //     addRecipe(form, history, setIsLoading)
  //   }
  // }
  return (
    <form>
      <MusicFormContainer>
        <InputsContainer>
          <InputText
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Title'}
            variant={'filled'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <InputText
            value={form.author}
            name={'author'}
            onChange={handleInputChange}
            label={'Author'}
            variant={'filled'}
            type={'text'}
            fullWidth
            required
            margin={'normal'}
          />
          <InputText
            value={form.date}
            name={'password'}
            onChange={handleInputChange}
            variant={'filled'}
            type={'date'}
            fullWidth
            required
            margin={'normal'}
          />
          <InputText
            value={form.file}
            name={'file'}
            onChange={handleInputChange}
            label={'Url'}
            variant={'filled'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <Selet
            label="Genero"
            value={form.genre}
            onChange={handleInputChange}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Pop">Pop</MenuItem>
            <MenuItem value="Rock">Rock</MenuItem>
            <MenuItem value="Kpop">Kpop</MenuItem>
            <MenuItem value="Sertanejo">Sertanejo</MenuItem>
            <MenuItem value="Gospel">Gospel</MenuItem>
            <MenuItem value="Samba">Samba</MenuItem>
            <MenuItem value="Country">Country</MenuItem>
            <MenuItem value="Música Clássica">Música Clássica</MenuItem>
            <MenuItem value="Funk">Funk</MenuItem>
            <MenuItem value="Eletrônica">Eletrônica</MenuItem>
            <MenuItem value="Jazz">Jazz</MenuItem>
            <MenuItem value="MPB">MPB</MenuItem>
          </Selet>
          <InputText
            value={form.album}
            name={'file'}
            onChange={handleInputChange}
            label={'Album'}
            variant={'filled'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
        </InputsContainer>
        <Botão
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
         Adicionar
        </Botão>
      </MusicFormContainer>
    </form>
  )
}
export default MusicFeedForm
