import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import { useState } from 'react';

function App() {
    const [totalYearlyData, setTotalYearlyData] = useState([]);

    const resetHandler = () => {
        setTotalYearlyData([]);
    };
    const calculateHandler = (userInput) => {
        console.log(userInput);

        // 양식이 제출될 때 트리거되어야 합니다.
        // 양식의 제출 이벤트에 직접 바인딩하고 싶지 않을 수도 있지만...

        const yearlyData = []; // per-year results

        let currentSavings = +userInput['current-savings']; // 현재 저축액
        let investedCapital = +userInput['current-savings']; // 총 투자 자본금
        const yearlyContribution = +userInput['yearly-contribution']; // 연간 저축액
        const expectedReturn = +userInput['expected-return'] / 100; // 예상 이자율
        const duration = +userInput['duration'];
        let yearlyInterest = currentSavings * expectedReturn; // 연간 이자
        let totalInterest = yearlyInterest;

        // 아래 코드는 연간 결과(총 저축액, 이자 등)를 계산합니다.
        for (let i = 0; i < duration; i++) {
            currentSavings += yearlyInterest + yearlyContribution;
            investedCapital += yearlyContribution;
            yearlyData.push({
                // 배열에 푸시되는 데이터의 모양을 자유롭게 변경할 수 있습니다!
                year: i + 1, // 연도
                savingsEndOfYear: currentSavings, // 연말 총 저축액
                yearlyInterest: yearlyInterest, // 연간 이자
                totalInterest: totalInterest,
                investedCapital: investedCapital,
            });
            // * currentSavings이 변경 됐으므로 yearlyInterest을 다시 선언
            yearlyInterest = currentSavings * expectedReturn;
            // * yearlyInterest이 변경 됐으므로 total 값인 totalInterest도 다시 선언
            totalInterest = yearlyInterest + totalInterest;
        }

        // 연간 데이터로 무언가를 수행 ...

        // console.log(yearlyData);
        setTotalYearlyData(yearlyData);
    };

    return (
        <div>
            <Header></Header>
            <Form calculateHandler={calculateHandler} resetHandler={resetHandler}></Form>
            {/* Todo: 조건부로 아래 표 표시(결과 데이터를 사용할 수 있는 경우에만) */}
            {/* 데이터를 사용할 수 없는 경우 대체 텍스트 표시 */}
            <Result items={totalYearlyData}></Result>
        </div>
    );
}

export default App;
