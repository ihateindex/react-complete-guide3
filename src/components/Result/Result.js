import style from "./Result.module.css";

const Result = (props) => {
  const formatter = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });

  return (
    <table className={`${style["result"]}`}>
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
        {/* * 여기서 반복문 돌림 */}
        {props.items.map((item) => {
          return (
            <tr>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>{formatter.format(item.totalInterest)}</td>
              <td>{formatter.format(item.investedCapital)}</td>
            </tr>
          );
        })}
        {/* <tr>
                    <td>연도</td>
                    <td>연말 총 저축액</td>
                    <td>연도별 이자 수익</td>
                    <td>총 이자 수익</td>
                    <td>총 투자 자본금</td>
                </tr> */}
      </tbody>
    </table>
  );
};

export default Result;
