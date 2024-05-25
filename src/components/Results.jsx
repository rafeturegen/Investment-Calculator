import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results ({data}) {

    const investResults = calculateInvestmentResults(data);
    const initialInvestment =
    investResults[0].valueEndOfYear - investResults[0].interest - investResults[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Investment Value</th>
                    <th scope="col">Interest (Year)</th>
                    <th scope="col">Total Interest</th>
                    <th scope="col">Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investResults.map(year => {
                    const totalInterest =year.valueEndOfYear - year.annualInvestment * year.year - initialInvestment;
                    const totalAmountInvested = year.valueEndOfYear - totalInterest;
                    return <tr key={year.year}>
                        <td>{year.year}</td>
                        <td>{formatter.format(year.valueEndOfYear)}</td>
                        <td>{formatter.format(year.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}