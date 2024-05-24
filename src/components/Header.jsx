import investImg from "../assets/investment-calculator-logo.png";

export default function Header () {
    return (
        <div id="header">
            <header>
                <img src={investImg}/>
                <h1>Invesment Calculator</h1>
            </header>
        </div>
    )
}