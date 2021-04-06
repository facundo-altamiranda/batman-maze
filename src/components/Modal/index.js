import React from 'react';
import Rodal from 'rodal';

import batmanLogo from '../../images/logo.png';
import './index.scss';

const Modal =  ({ gameWon, onClose, ...rest }) => {
    return (
        <Rodal 
            className={'batman-modal'}
            onClose={onClose}
            enterAnimation={'rotate'}
            leaveAnimation={'rotate'}
            showCloseButton={false}
            closeMaskOnClick={false}
            {...rest}
        >
            <button className={'outline-none focus:outline-none'} onClick={onClose}>
                <img alt={'batman logo'} className={'h-32'} src={batmanLogo}/>
                <span className={'relative text-white font-bold text-lg start-bottom'}>{gameWon ? 'RESET' : 'START'}</span>
            </button>
        </Rodal>
    )
};

export default Modal;