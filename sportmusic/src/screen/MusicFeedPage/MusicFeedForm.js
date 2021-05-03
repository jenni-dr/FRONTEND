import React  from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {Botão} from './styled'
import { Container,PostContainer,InputPost} from './styled'
import { addMusic } from '../../services/music'


const MusicFeedForm = () => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', author: '',date:'', file:'', genre:[],album:''})
  
  const onClickAddMusic = (event) => {
    event.preventDefault()
    const element = document.getElementById('music_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addMusic(form, history)
    }
  }
  return (
    <form id={'music_form'} >
      <Container>
        <PostContainer>
          <InputPost
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Titulo'}
            variant={'filled'}
            required
            autoFocus
            margin={'normal'}
          />
          <InputPost
            value={form.author}
            name={'author'}
            onChange={handleInputChange}
            label={'Author'}
            variant={'filled'}
            required
            margin={'normal'}
          />
           <InputPost
            value={form.date}
            name={'date'}
            onChange={handleInputChange}
            variant={'filled'}
            type={'date'}
            min="YYYY-MM-DD"
            fullWidth
            required={true}
            margin={'normal'}
          />
          <InputPost
            style={{ color:"white" }}
            value={form.file}
            name={'file'}
            onChange={handleInputChange}
            label={'Url'}
            variant={'filled'}
            required={true}
            autoFocus
            margin={'normal'}
          />
           <InputPost
            value={form.genre}
            name={'genre'}
            onChange={handleInputChange}
            label={'Gênero'}
            variant={'filled'}
            required
            autoFocus
            margin={'normal'}
          />
          <InputPost
            value={form.album}
            name={'album'}
            onChange={handleInputChange}
            label={'Album'}
            variant={'filled'}
            required
            autoFocus
            margin={'normal'}
          />
        </PostContainer>
        <Botão
          onClick={onClickAddMusic}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
         Adicionar
        </Botão>
      </Container>
    </form>
  )
}
export default MusicFeedForm
