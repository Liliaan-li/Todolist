import React from 'react';
type Button ={
title: string
    onClick?: ()=>void
}
const ButtonPropsType = (props: Button) => {
    return (

            <button>{props.title}</button>
       
    );
};

export default ButtonPropsType;