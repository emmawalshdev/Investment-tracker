import React, {useState} from 'react';
import Header from './components/UI/Header';
import NewInvestment from './components/NewInvestment//NewInvestment';
import InvestmentResults from './components/InvestmentResults/InvestmentResults';

function App() {

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => { // receives userinput from NewInvestment
    setUserInput(userInput);
  };

  const yearlyData = []; // array to hold per-year results

  if (userInput){

    // declare variables for each value
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration']; // years, number of rows
  
    // for each year in duration, calculate yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <NewInvestment onSaveInvestmentData={calculateHandler}/>
      {!userInput && <p style={{textAlign: 'center'}}>No investment calculate yet.</p>}
      {userInput && <InvestmentResults items={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  )
}

export default App;
