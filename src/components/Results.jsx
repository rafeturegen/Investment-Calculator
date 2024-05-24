import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results ({data}) {

    const investResults = calculateInvestmentResults(data);
    console.log(investResults);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Investment Value</th>
                    <th scope="col">Interest (Year)</th>
                    <th scope="col">Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investResults.map(year => {
                    return <tr key={year.year}>
                        <td>{year.year}</td>
                        <td>{formatter.format(year.valueEndOfYear)}</td>
                        <td>{formatter.format(year.interest)}</td>
                        <td>{formatter.format(year.annualInvestment)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}