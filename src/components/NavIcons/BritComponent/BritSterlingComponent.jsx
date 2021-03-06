import React from 'react';
import classes from './Brit.module.css';
const CustomBritSterling = ({fill}) =>{
    return(
        <svg className={ fill === '#FD3A6C' ? classes.iconWhiteBack : classes.icon &&
        fill === 'black' ?  classes.iconNoneBack : classes.iconNoneBack &&
        fill === 'white' ?  classes.icon : classes.iconNoneBack
        }  viewBox="0 0 12 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} d="M11.16 13.18V15.04H1.9L1.5 13.8C2.06 13.2 2.47333 12.6067 2.74 12.02C3.00667 11.42 3.14 10.68 3.14 9.8C3.14 9.53333 3.10667 9.25333 3.04 8.96H0.84V7.38H2.54C2.26 6.54 2.12 5.72667 2.12 4.94C2.12 4.04667 2.31333 3.27333 2.7 2.62C3.08667 1.96667 3.62 1.46667 4.3 1.12C4.98 0.76 5.76667 0.58 6.66 0.58C8.08667 0.58 9.16667 0.98 9.9 1.78C10.6333 2.58 11.0133 3.6 11.04 4.84H8.96C8.96 4.12 8.77333 3.55333 8.4 3.14C8.02667 2.71333 7.44667 2.5 6.66 2.5C5.94 2.5 5.36 2.70667 4.92 3.12C4.49333 3.53333 4.28 4.18 4.28 5.06C4.28 5.44667 4.32 5.82 4.4 6.18C4.48 6.54 4.59333 6.94 4.74 7.38H8.62V8.96H5.2C5.26667 9.26667 5.3 9.55333 5.3 9.82C5.3 11.1133 4.85333 12.2333 3.96 13.18H11.16Z" />
        </svg>

    )
}
export default CustomBritSterling;