import style from './Input.module.css';

const Input = (props) => {
    return (
        <p>
            <label className={`${style['label']}`} htmlFor={props.id}>
                {props.label}
            </label>
            <input className={`${style['input']}`} type={props.type} id={props.id} />
        </p>
    );
};

export default Input;
