import React from 'react'
import { InputsContainer, LoginFormContainer,InputText,Botão} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'

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
            <InputText
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              label={'E-mail'}
              variant={"filled"}
              type={'email'}
              fullWidth
              autoFocus
              required
              color={'primary'}
              margin={'normal'}
              
            />
            <InputText
              value={form.password}
              name={'password'}
              onChange={handleInputChange}
              label={'Senha'}
              variant={"filled"}
              type={'password'}
            
              fullWidth
              required
              margin={'normal'}
            />
          </InputsContainer>
          <Botão
            onClick={onClickLogin}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
           Login
          </Botão>
        </LoginFormContainer>
      </form>
  )
}
export default LoginForm
