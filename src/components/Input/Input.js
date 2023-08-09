import style from './Input.module.css';
import { useState } from 'react';

const Input = (props) => {
    const inputChangeHandler = (input, value) => {
        props.onChange(input, value);
    };

    return (
        <p>
            <label className={`${style['label']}`} htmlFor={props.id}>
                {props.label}
            </label>
            <input
                className={`${style['input']}`}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={(event) => {
                    inputChangeHandler(event.target.id, event.target.value);
                }}
            />
        </p>
    );
};

export default Input;
