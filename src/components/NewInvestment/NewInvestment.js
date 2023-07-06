// form
import React, {useState} from "react";

const NewInvestment = () => {

    const [isReset, setIsReset] = useState('false');

    const [enteredCurrentSavings, setCurrentSavings] = useState('');
    const [enteredYearlySavings, setYearlySavings] = useState('');
    const [enteredExpectedInterest, setExpectedInterests] = useState('');
    const [enteredInvestmentDuration, setInvestmentDuration] = useState('');
    
    const submitButtonHandler = (event) => {
        event.preventDefault();

        const InvestmentData = {
            currentSavings: enteredCurrentSavings,
            yearlySavings: enteredYearlySavings,
            expectedInterest: enteredExpectedInterest,
            investmentDuration: enteredInvestmentDuration,
        }
    }

    const resetButtonHandler = () => {
        console.log('reset');
    }

    // save num to state on change
    const inputChangeHandler = (event) => {
        if(event.target.id == 'currentSavings'){
            setCurrentSavings(event.target.value);
            console.log(enteredCurrentSavings);
        } else if (event.target.id == 'yearlySavings'){
            setYearlySavings(event.target.value);
        } else if (event.target.id == 'expectedInterest'){
            console.log('expected interest');
            setExpectedInterests(event.target.value);
        } else if (event.target.id == 'investmentDuration'){
            setInvestmentDuration(event.target.value);
        }
    }


    return ( <div>
    <form className="form" onSubmit={submitButtonHandler}>
        <div className="input-group">
        <p>
            <label htmlFor="currentSavings">Current Savings ($)</label>
            <input type="number" id="currentSavings" onChange={inputChangeHandler}/>
        </p>
        <p>
            <label htmlFor="yearlySavings">Yearly Savings ($)</label>
            <input type="number" id="yearlySavings" onChange={inputChangeHandler}/>
        </p>
        </div>
        <div className="input-group">
        <p>
            <label htmlFor="expectedInterest">
            Expected Interest (%, per year)
            </label>
            <input type="number" id="expectedInterest" onChange={inputChangeHandler}/>
        </p>
        <p>
            <label htmlFor="investmentDuration">Investment Duration (years)</label>
            <input type="number" id="investmentDuration" onChange={inputChangeHandler}/>
        </p>
        </div>
        <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetButtonHandler}>
            Reset
        </button>
        <button type="submit" className="button">
            Calculate
        </button>
        </p>
    </form>
    </div>
    )
}

export default NewInvestment;