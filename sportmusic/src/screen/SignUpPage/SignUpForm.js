import React  from 'react'
import { InputText,Botão,InputsContainer, SignUpFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../services/user'
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
          <InputText
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

          
          <InputText
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
          <InputText
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
          <InputText
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
        <Botão
          onClick={onClickSignUp}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
         Fazer Cadastro
        </Botão>
      </SignUpFormContainer>
    </form>
  )
}
export default SignUpForm
