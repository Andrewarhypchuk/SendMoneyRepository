import React from 'react';
import classes from './Dollar.module.css';

const CustomDollar = ({fill}) =>{
    console.log(fill)
    return(
        <svg className={ fill === '#FD3A6C' ? classes.iconWhiteBack : classes.icon &&
                         fill === 'black' ?  classes.iconNoneBack : classes.iconNoneBack &&
                         fill === 'white' ?  classes.icon : classes.iconNoneBack
        } viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} d="M9.88 12.04C9.88 12.7067 9.71333 13.3333 9.38 13.92C9.06 14.5067 8.58 15 7.94 15.4C7.31333 15.8 6.56667 16.04 5.7 16.12V17.74H4.4V16.12C3.14667 16 2.13333 15.6067 1.36 14.94C0.586667 14.2733 0.2 13.3933 0.2 12.3H2.64C2.68 12.82 2.84667 13.2533 3.14 13.6C3.43333 13.9333 3.85333 14.1467 4.4 14.24V9.84C3.50667 9.61333 2.78 9.38667 2.22 9.16C1.66 8.92 1.18 8.54667 0.78 8.04C0.393333 7.53333 0.2 6.84 0.2 5.96C0.2 4.85333 0.586667 3.94 1.36 3.22C2.13333 2.48667 3.14667 2.06 4.4 1.94V0.319999H5.7V1.94C6.87333 2.04667 7.81333 2.42 8.52 3.06C9.24 3.68667 9.64667 4.55333 9.74 5.66H7.3C7.26 5.24667 7.1 4.88 6.82 4.56C6.54 4.22667 6.16667 4 5.7 3.88V8.2C6.59333 8.41333 7.32 8.64 7.88 8.88C8.44 9.10667 8.91333 9.47333 9.3 9.98C9.68667 10.4733 9.88 11.16 9.88 12.04ZM2.52 5.84C2.52 6.38667 2.68 6.81333 3 7.12C3.33333 7.42667 3.8 7.67333 4.4 7.86V3.82C3.82667 3.88667 3.36667 4.09333 3.02 4.44C2.68667 4.78667 2.52 5.25333 2.52 5.84ZM5.7 14.24C6.28667 14.1467 6.74667 13.9133 7.08 13.54C7.41333 13.1533 7.58 12.6933 7.58 12.16C7.58 11.6267 7.41333 11.2133 7.08 10.92C6.76 10.6133 6.3 10.3667 5.7 10.18V14.24Z" />
        </svg>

    )
}
export default CustomDollar;