import React from 'react';

const Modal = ({message, closeModal, setShowPlayScreen}) => {
    const handlerQuitGame = () => {
        setShowPlayScreen(true);
        closeModal(false);
    }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          {message}
        </div>
        
        <div className="modal-footer">
          <button className="modal-button" onClick={handlerQuitGame}>Quit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
