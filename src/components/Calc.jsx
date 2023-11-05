import { useState } from 'react'
import './styles.css'

function Calc() {
    const [input, setInput] = useState('')
    function handleButtonClick(value) {
        setInput(input + value)
    }
    const handleInputChange = (event) => {
        let modifiedValue = event.target.value;
        modifiedValue = modifiedValue.replace(/[^0-9*+\-=/()%]/g, '');
        modifiedValue = modifiedValue.replace(/%/g, '/100');
        setInput(modifiedValue)
    }
    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };
    return (
        <main className='main-container'>

            <div className="calc-container" >
                <input className="calc-input" type="text" value={input} onChange={handleInputChange} />
                <button className="button-1" onClick={() => handleButtonClick('1')}>1</button>
                <button className="button-2" onClick={() => handleButtonClick('2')}>2</button>
                <button className="button-3" onClick={() => handleButtonClick('3')}>3</button>
                <button className="button-4" onClick={() => handleButtonClick('4')}>4</button>
                <button className="button-5" onClick={() => handleButtonClick('5')}>5</button>
                <button className="button-6" onClick={() => handleButtonClick('6')}>6</button>
                <button className="button-7" onClick={() => handleButtonClick('7')}>7</button>
                <button className="button-8" onClick={() => handleButtonClick('8')}>8</button>
                <button className="button-9" onClick={() => handleButtonClick('9')}>9</button>
                <button className="button-10" onClick={() => handleButtonClick('0')}>0</button>
                <button className="button-11" onClick={() => handleButtonClick('%')}>%</button>
                <button className="button-12" onClick={() => handleButtonClick('+')}>+</button>
                <button className="button-13" onClick={() => handleButtonClick('-')}>-</button>
                <button className="button-14" onClick={() => handleButtonClick('/')}>/</button>
                <button className="button-15" onClick={() => handleButtonClick('*')}>*</button>
                <button className="button-16" onClick={handleCalculate}>=</button>
            </div>
        </main>
    )
}

export default Calc