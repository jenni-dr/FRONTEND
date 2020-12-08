import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

import { addMusic} from '../../services/music'

const MusicFeedForm = () => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({
    title: '', 
    file: '', 
    genresIds:[], 
    albumId:''
  })
 

  const onClickCreateMusic = (event) => {
    event.preventDefault()
    addMusic(form,history)
    }
  

  return (
    <form >
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'title'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.file}
            name={'file'}
            onChange={handleInputChange}
            label={'file'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.genresIds}
            name={'genresIds'}
            onChange={handleInputChange}
            label={'genresIds'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.albumId}
            name={'albumId'}
            onChange={handleInputChange}
            label={'albumId'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          onClick={onClickCreateMusic}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
         Adicionar Musica
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

export default MusicFeedForm
