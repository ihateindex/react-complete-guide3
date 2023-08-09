import style from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {
    const INITIAL_FORM_DATA = {
        'current-savings': '',
        'yearly-contribution': '',
        'expected-return': '',
        duration: '',
    };
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const inputChangeHandler = (input, value) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [input]: value,
            };
        });
    };

    const formResetHandler = (event) => {
        event.preventDefault();

        setFormData(INITIAL_FORM_DATA);

        props.resetHandler();
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const isAnyEmpty = Object.values(formData).some((value) => value === '');
        if (isAnyEmpty === true) {
            console.log('empty!');
            return;
        }

        props.calculateHandler(formData);
    };

    return (
        <form className={`${style['form']}`} onSubmit={formSubmitHandler} onReset={formResetHandler}>
            <div className={`${style['input-group']}`}>
                <Input label="현재 저축액 (₩)" type="number" id="current-savings" value={formData['current-savings']} onChange={inputChangeHandler}></Input>
                <Input label="연간 저축액 (₩)" type="number" id="yearly-contribution" value={formData['yearly-contribution']} onChange={inputChangeHandler}></Input>
            </div>
            <div className={`${style['input-group']}`}>
                <Input label="예상 이자 (%, 연간)" type="number" id="expected-return" value={formData['expected-return']} onChange={inputChangeHandler}></Input>
                <Input label="투자 기간 (년)" type="number" id="duration" value={formData['duration']} onChange={inputChangeHandler}></Input>
            </div>
            <p className={`${style['actions']}`}>
                <Button type="reset" className="buttonAlt">
                    초기화
                </Button>
                <Button type="submit" className="button">
                    계산하기
                </Button>
            </p>
        </form>
    );
};

export default Form;
