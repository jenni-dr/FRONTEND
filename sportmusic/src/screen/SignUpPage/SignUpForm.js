import React  from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user/user'
import useForm from '../../hooks/useForm'

const SignUpForm = () => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({name: '', email: '', password: '',nickname:"",})
  

  const onClickSignUp = (event) => {
    event.preventDefault()
    signUp(form, history)
    }
  

  return (
    <form >
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={handleInputChange}
            label={'Name'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />

          
          <TextField
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.nickname}
            name={'nickname'}
            onChange={handleInputChange}
            label={'NickName'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          onClick={onClickSignUp}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
         Fazer Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
