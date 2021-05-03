import React   from 'react'
import { Backdrop, Modal } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {ModalCardArtist,ContainerArtist,Botão,InputArtist ,CardContainer,BotãoArtist} from './styled';
import { criarArtist } from '../../services/music';



const ArtistForm = () => {

    const history = useHistory()
    const [form, handleInputChange] = useForm({name: ""})
    
    const onClickAddArtist = (event) => {
        event.preventDefault()
        const element = document.getElementById('music_form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if (isValid) {
          criarArtist(form, history)
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
      <CardContainer>
        <BotãoArtist
          onClick={handleOpen}
          >
            Criar Artist
        </BotãoArtist>
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
            <ModalCardArtist>
              <ContainerArtist>
                <InputArtist
                  value={form.name}
                  name={'name'}
                  onChange={handleInputChange}
                  placeholder="Name"
                  type={'text'}
                />
                <Botão
                  onClick={onClickAddArtist}
                  type={'submit'}
                >
                  Adicionar
                </Botão>
              </ContainerArtist>
            </ModalCardArtist>
          </Modal>
          </form>
    </CardContainer>
  )
}
export default ArtistForm