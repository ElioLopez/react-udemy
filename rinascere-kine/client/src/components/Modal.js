import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
    return ReactDOM.createPortal(
        <div
          onClick={() => history.push('/')}
          className="ui dimmer modals visible active"
          >
            <div className="ui standard modal visible active">
                <div className="header">Usuario no registrado</div>
                <div className="content">
                    Loguearse con Goggle?
                </div>
                <div className="actions">
                    <button className="ui primary button">Login</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;