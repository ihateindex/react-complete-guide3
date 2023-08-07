import style from './Header.module.css';
import logo from '../../assets/investment-calculator-logo.png';

const Header = () => {
    return (
        <header className={`${style['header']}`}>
            <img src={logo} alt="logo" />
            <h1>투자 계산기</h1>
        </header>
    );
};

export default Header;
