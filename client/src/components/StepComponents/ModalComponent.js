import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

function ModalComponent( {image, ingredients, allIngredients, modalOpen,setModalOpen} ) {
  let shown;
  if(modalOpen ==='Image'){
    shown = <img src={image} alt="dummyImage" width="80%" textAlign="center"/>
  }else if(modalOpen ==='Ingredients'){
    shown = <ul>{ingredients.map((ingredient,index)=><li key={ingredient+index}>{ingredient}</li>)}</ul>
  }else{
    shown = <ul>{allIngredients.map((ingredient,index)=><li key={ingredient+index}>{ingredient}</li>)}</ul>
  }

  return (
    <>
      <div>
        <Modal isOpen={modalOpen} toggle={()=>setModalOpen('')}>
          {/* Header still needs styled and chevron added after icon lib is decided on */}
          <div className='modalHeader'>{modalOpen} <span style={{cursor:'pointer'}} onClick={()=>setModalOpen('')}>X</span></div>
          <ModalBody>  
            {shown}
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default ModalComponent;