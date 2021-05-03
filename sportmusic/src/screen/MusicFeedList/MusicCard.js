import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CardContent} from '@material-ui/core';
import {CardConteiner,  MusicText,CardControler, ConatainerModal,ModalCard,BotãoModal} from './styled'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';



const MusicCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
  <>
  {/* onClick={props.onClick} */}
    <CardConteiner  >
    <CardContent>  
      <MusicText variant="h5" component="h2">
          {props.title}
      </MusicText>
      <MusicText >
          {props.author}
      </MusicText>
      <br></br>
      <BotãoModal type="button" onClick={handleOpen}>
        info +
      </BotãoModal>
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
        <ModalCard>
          <ConatainerModal>
            <p>{props.date}</p>
            <p>{props.genre}</p>
            <p>{props.album}</p>
          </ConatainerModal>
        </ModalCard>
      </Modal>
       
    </CardContent>
      <CardControler 
          autoplay="autoplay"controls="controls">
          <source src={props.file} type="audio/mp3"/>
      </CardControler>
      <DeleteForeverIcon 
        onClick={() =>props.removeMusic(props.musicId)}
        style={{ color:"black"}}  
        fontSize="large"  />
    </CardConteiner>
  </>
  )
}
export default MusicCard
