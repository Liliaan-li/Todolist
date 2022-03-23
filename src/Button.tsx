import React from 'react';
type Button ={
title: string
    onClick?: ()=>void
    onClickHandler:()=>void
    btnClass?:string
}
const Button = (props: Button) => {
    return (

            <button className={props.btnClass}
                    onClick={props.onClickHandler}>
                {props.title}
            </button>
       
    );
};

export default Button;