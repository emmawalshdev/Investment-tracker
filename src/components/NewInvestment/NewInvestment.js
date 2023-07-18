// form
import React, {useState} from "react";

const NewInvestment = (props) => {

    const initialUserInput = {
        'current-savings': 1000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        'duration': 5,
    }

    const [userInput, setUserInput] = useState(initialUserInput);
    
    const submitButtonHandler = (event) => {
        event.preventDefault();

        props.onSaveInvestmentData(userInput);
    }

    // reset states to empty on reset btn click
    const resetButtonHandler = () => {
        console.log('reset');
        setUserInput(initialUserInput); //set initial state
    }

    // save num to state on change
    const inputChangeHandler = (event) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [event.target.id]:event.target.value
            }
        });
    }


    return ( <div>
    <form className="form" onSubmit={submitButtonHandler}>
        <div className="input-group">
        <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={inputChangeHandler}
              value={userInput['current-savings']}
            />
        </p>
        <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={inputChangeHandler}
              value={userInput['yearly-contribution']}
            />
        </p>
        </div>
        <div className="input-group">
        <p>
            <label htmlFor="expected-return">
            Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={inputChangeHandler}
              value={userInput['expected-return']}
            />
        </p>
        <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={inputChangeHandler}
              value={userInput['duration']}
            />
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