import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

function ModalComponent( {shown, setShown} ) {
  return (
    <>
      <div>
        <Modal isOpen={shown.title} toggle={()=>setShown({title:'',contents:''})}>
          {/* Header still needs styled and chevron added after icon lib is decided on */}
          <div className='modalHeader'>{shown.title} <span style={{cursor:'pointer'}} onClick={()=>setShown({title:'',contents:''})}>X</span></div>
          <ModalBody>  
            {shown.contents}
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default ModalComponent;