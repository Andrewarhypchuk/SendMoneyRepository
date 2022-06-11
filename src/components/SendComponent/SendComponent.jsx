import React from 'react';
import classes from './Send.module.css';
import sendIcon from '../../img/SendPage/VectorSend.svg';
const SendComponent = (props)=>{
    return(
        <div className={classes.homeContainer}>
            <div className={classes.sendButton}>
                <img src={sendIcon} alt='sendIcon'></img>
                Send</div>
        </div>
    )
}
export default SendComponent;