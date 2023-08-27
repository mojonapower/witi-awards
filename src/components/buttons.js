import * as React from 'react';
import "../styles/buttons.css"



export const Button = (props)=>{

    return <button className='button text-wrapper '>{props.title}</button>
}

export const OutlineButton = (props)=>{

    return <button className='button-outline text-wrapper '>{props.title}</button>
}