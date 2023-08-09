import style from './Result.module.css';

const Result = (props) => {
    const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW',
    });

    return (
        <table className={`${style['result']}`}>
            <thead>
                <tr>
                    <th>연도</th>
                    <th>총 저축액</th>
                    <th>이자(년)</th>
                    <th>총 이자</th>
                    <th>투자 자본금</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item) => {
                    return (
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.savingsEndOfYear)}</td>
                            <td>{formatter.format(item.yearlyInterest)}</td>
                            <td>{formatter.format(item.totalInterest)}</td>
                            <td>{formatter.format(item.investedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Result;
