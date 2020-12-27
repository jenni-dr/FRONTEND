import React   from 'react'
import { Backdrop, Modal } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { criarAlbum } from '../../services/music'
import useForm from '../../hooks/useForm'
import {CardAlbum,BotãoAlbum,Botão,ContainerAlbum,ModalCardAlbum,InputAlbum} from './styled'

const AlbumForm = () =>{
    const history = useHistory()
    const [form, handleInputChange] = useForm({name: ""})
    
    const onClickAddAlbum = (event) => {
        event.preventDefault()
        const element = document.getElementById('music_form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
          criarAlbum(form, history)
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
      <CardAlbum>
        <BotãoAlbum
            onClick={handleOpen}
          >
            Criar Álbum
        </BotãoAlbum>
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
            <ModalCardAlbum>
              <ContainerAlbum>
                <InputAlbum
                  value={form.name}
                  name={'name'}
                  onChange={handleInputChange}
                  placeholder="Name"
                  type={'text'}
                />
                <Botão
                  onClick={onClickAddAlbum}
                  type={'submit'}
                >
                  Adicionar
                </Botão>
              </ContainerAlbum>
            </ModalCardAlbum>
          </Modal>
          </form>
      </CardAlbum>
    )
}
export default AlbumForm