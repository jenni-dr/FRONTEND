import React   from 'react'
import { Backdrop, Modal } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { criarGenero } from '../../services/music'
import {ModalCardGenero,ContainerGenero,Botão,InputGenero ,CardGenre,BotãoGenre} from './styled';

const GeneroForm =()=>{
    const history = useHistory()
    const [form, handleInputChange] = useForm({name: ""})
    
    const onClickAddGenero = (event) => {
        event.preventDefault()
        const element = document.getElementById('music_form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
          criarGenero(form, history)
        }
      }
  
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      return(
        <CardGenre>
          <BotãoGenre
            onClick={handleOpen}
          >
            Criar Gênero
          </BotãoGenre>
          <form  id={'music_form'}> 
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <ModalCardGenero>
              <ContainerGenero>
                <InputGenero
                  value={form.name}
                  name={'name'}
                  onChange={handleInputChange}
                  placeholder="Name"
                  type={'text'}
                />
                <Botão
                  onClick={onClickAddGenero}
                  type={'submit'}
                >
                  Adicionar
                </Botão>
              </ContainerGenero>
            </ModalCardGenero>
          </Modal>
          </form>
        </CardGenre>
  )
}
export default GeneroForm