import style from './Input.module.css';
import { useState } from 'react';

const Input = (props) => {
    const onChangeHandler = (event) => {
        console.log(event.target.value);
        props.onChange(event.target.value);
    };

    return (
        <p>
            <label className={`${style['label']}`} htmlFor={props.id}>
                {props.label}
            </label>
            <input className={`${style['input']}`} type={props.type} id={props.id} value={props.value} onChange={onChangeHandler} />
        </p>
    );
};

export default Input;
