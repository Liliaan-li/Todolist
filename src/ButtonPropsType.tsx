import React from 'react';
type Button ={
title: string
}
const ButtonPropsType = (props: Button) => {
    return (

            <button>{props.title}</button>
       
    );
};

export default ButtonPropsType;