import React   from 'react'
import { Modal } from '@material-ui/core'
import {CardPlaylist,ContainerModal, ModalCardPlaylist,Botão,InputPlaylist ,BotãoPlay} from './styled';
import Backdrop from '@material-ui/core/Backdrop';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { criarPlaylist } from '../../services/music';



const PlaylistForm = () => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', subtitle: '',image:''})
  
  const onClickAddPlaylist = (event) => {
      event.preventDefault()
      const element = document.getElementById('music_form')
      const isValid = element.checkValidity()
      element.reportValidity()
      if (isValid) {
        criarPlaylist(form, history)
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
    <CardPlaylist>
      <BotãoPlay
        onClick={handleOpen}
      >
        Criar Playlist
      </BotãoPlay>
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
        <ModalCardPlaylist>
          <ContainerModal>
            <InputPlaylist
              value={form.title}
              name={'title'}
              onChange={handleInputChange}
              placeholder="Title"
              type={'text'}
            />
            <InputPlaylist
              value={form.subtitle}
              name={'subtitle'}
              onChange={handleInputChange}
              placeholder= "Subtitle"
              type={'text'}
            />
            <InputPlaylist
              value={form.image}
              name={'image'}
              onChange={handleInputChange}
              placeholder="Image"
              type={'text'}
            />
            <Botão
              onClose={handleClose}
              onClick={onClickAddPlaylist}
              type={'submit'}
            >
              Adicionar
            </Botão>
          </ContainerModal>
        </ModalCardPlaylist>
      </Modal>
      </form>
    </CardPlaylist>
  )
}
export default PlaylistForm