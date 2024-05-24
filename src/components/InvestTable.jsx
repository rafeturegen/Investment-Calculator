import { useState } from "react";

export default function InvestTable({onChange, dataObject}) {
    return (
        <section id="user-input">
            <div className="input-group first-group">
                <label>Initial Invest</label>
                <input type="number" value={dataObject.initialInvestment} onChange={(event) => onChange("initialInvestment", event.target.value)} required></input>
                <label>Annual Invest</label>
                <input type="number" value={dataObject.annualInvestment} onChange={(event) => onChange("annualInvest", event.target.value)} required></input>
            </div>
            <div className="input-group second-group">
                <label>Initial Invest</label>
                <input type="number" value={dataObject.expectedReturn} onChange={(event) => onChange("expectedReturn", event.target.value)} required></input>
                <label>Annual Invest</label>
                <input type="number" value={dataObject.duration} onChange={(event) => onChange("duration", event.target.value)}required></input>
            </div>
        </section>
    )
}