import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
    const calculateHandler = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = []; // per-year results

        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        // do something with yearlyData ...
    };

    return (
        <div>
            <Header></Header>
            <Form></Form>
            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}

            <table className="result">
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
                    <tr>
                        <td>연도</td>
                        <td>연말 총 저축액</td>
                        <td>연도별 이자 수익</td>
                        <td>총 이자 수익</td>
                        <td>총 투자 자본금</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
