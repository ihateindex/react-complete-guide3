import style from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = () => {
    return (
        <form className={`${style['form']}`}>
            <div className={`${style['input-group']}`}>
                {/* <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" />
                    </p> */}
                <Input label="현재 저축액 (₩)" type="number" id="current-savings"></Input>
                <Input label="연간 저축액 (₩)" type="number" id="yearly-contribution"></Input>
            </div>
            <div className={`${style['input-group']}`}>
                {/* <p>
                        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                        <input type="number" id="expected-return" />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" />
                    </p> */}
                <Input label="예상 이자 (%, 연간)" type="number" id="expected-return"></Input>
                <Input label="투자 기간 (년)" type="number" id="duration"></Input>
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
