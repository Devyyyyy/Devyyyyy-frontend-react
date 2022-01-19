import React from 'react';
import './Button.css'


const STYLES: Array<string> = [
    'btn--primary',
    'btn--outline'
]

const SIZES: Array<string> = [
    'btn--medium',
    'btn--large'
]

const Button = (paramObj : {
    children,
    type,
    onClick,
    buttonStyle: string,
    buttonSize: string
}) => {

    const chkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const chkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${chkBtnStyle} ${chkBtnSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )

}
export default Button