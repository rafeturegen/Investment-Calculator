import Header from "./components/Header";
import InvestTable from "./components/InvestTable";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {

  const [dataObject, setDataObject] = useState({
    initialInvestment: 10000,
    annualInvestment:1000,
    expectedReturn:6,
    duration:12,
  })

  const isValid = dataObject.duration > 0;

  function handleInputChange (inputName, newInput) {
      setDataObject((prevDataObject) => {
          return {
              ...prevDataObject,
              [inputName]: +newInput,
          }
      })
  }
  return (
    <>
      <Header/>
      <InvestTable onChange={handleInputChange} dataObject={dataObject}/>
      {isValid ? <Results data={dataObject}/> : <p id="duration-error">Duration must be greater than 0. </p>}
    </>
  )
}

export default App
