import style from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {
    const [currentSavings, setCurrentSavings] = useState('');
    const currentSavingsHandler = (enteredNumber) => {
        setCurrentSavings(enteredNumber);
    };

    const [yearlyContribution, setYearlyContribution] = useState('');
    const yearlyContributionHandler = (enteredNumber) => {
        setYearlyContribution(enteredNumber);
    };

    const [expectedReturn, setExpectedReturn] = useState('');
    const expectedReturnHandler = (enteredNumber) => {
        setExpectedReturn(enteredNumber);
    };

    const [duration, setDuration] = useState('');
    const durationHandler = (enteredNumber) => {
        setDuration(enteredNumber);
    };

    const formResetHandler = (event) => {
        event.preventDefault();

        setCurrentSavings('');
        setYearlyContribution('');
        setExpectedReturn('');
        setDuration('');

        props.resetHandler();
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (currentSavings && yearlyContribution && expectedReturn && duration) {
            const formData = {
                'current-savings': currentSavings,
                'yearly-contribution': yearlyContribution,
                'expected-return': expectedReturn,
                duration: duration,
            };

            // console.log(formData);
            props.calculateHandler(formData);
        }
    };

    return (
        <form className={`${style['form']}`} onSubmit={formSubmitHandler} onReset={formResetHandler}>
            <div className={`${style['input-group']}`}>
                <Input label="현재 저축액 (₩)" type="number" id="current-savings" value={currentSavings} onChange={currentSavingsHandler}></Input>
                <Input label="연간 저축액 (₩)" type="number" id="yearly-contribution" value={yearlyContribution} onChange={yearlyContributionHandler}></Input>
            </div>
            <div className={`${style['input-group']}`}>
                <Input label="예상 이자 (%, 연간)" type="number" id="expected-return" value={expectedReturn} onChange={expectedReturnHandler}></Input>
                <Input label="투자 기간 (년)" type="number" id="duration" value={duration} onChange={durationHandler}></Input>
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
