import React, {useState} from 'react';
import classes from './Send.module.css';
const SendComponent = ({isSendActive,fill}) =>{
    console.log(isSendActive)
    return(
        <svg className = {classes.imgNav} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} d="M14.3243 0.397982L0.950116 8.96841C0.427845 9.30174 0.494211 10.1094 1.0136 10.353L4.08086 11.7825L12.3708 3.66718C12.5295 3.51013 12.7546 3.75051 12.619 3.9332L5.66787 13.3402V15.9203C5.66787 16.6767 6.49023 16.9747 6.8942 16.4267L8.72648 13.9491L12.3218 15.6222C12.7315 15.8145 13.199 15.5292 13.274 15.0389L15.3515 1.19285C15.4496 0.545416 14.8235 0.0774719 14.3243 0.397982Z" />
        </svg>
    )

}
export default  SendComponent;