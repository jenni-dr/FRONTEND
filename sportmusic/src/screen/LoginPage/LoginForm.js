import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, LoginFormContainer} from './styled'

import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
//import CircularProgress from '@material-ui/core/CircularProgress'
import { login } from '../../services/user/user'

const LoginForm = () => {
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const history = useHistory()

  const onClickLogin = (event) => {
    event.preventDefault()
    login(form, history)
    }
  

  return (
      <form >
        <LoginFormContainer>
          <InputsContainer>
            <TextField
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              label={'E-mail'}
              variant={'outlined'}
              type={'email'}
              fullWidth
              required
              autoFocus
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
          </InputsContainer>
          <Button
            onClick={onClickLogin}
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
           Login
          </Button>
        </LoginFormContainer>
      </form>
  )
}

export default LoginForm
