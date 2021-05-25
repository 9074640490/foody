import React, { useState } from 'react'


const Calculator = props => {
    const [calculateValue, setCalculateValue] = useState(0)
    const [counterValue1, setCounterValue1] = useState(0)
    const [counterValue2, setCounterValue2] = useState(0)
    // const [arthematicValue, setArthematicValue] = useState(0)




    //WHEN DONE =
    const onSubmit = () => {
        setCalculateValue(parseInt(counterValue1 + arthematicValue + counterValue2))
    }

    return (
        <div>
            <div>Calculated value : {calculateValue}</div>
            <button onClick={() => setCounterValue1(counterValue1 - 1)}>-</button>
            {counterValue1}
            <button onClick={() => setCounterValue1(counterValue1 + 1)}>+</button>
            <br />
            <br />
            <button onClick={() => setArthematicValue('+')}>+</button>
            <button onClick={() => setArthematicValue('-')}>-</button>
            <button onClick={() => setArthematicValue('/')} >/</button>
            <button onClick={() => setArthematicValue('*')}>*</button>
            <br />
            <br />

            <button onClick={() => setCounterValue2(counterValue2 - 1)}>-</button>
            {counterValue2}
            <button onClick={() => setCounterValue2(counterValue2 + 1)}>+</button>

            <br />
            <br />

            <button onClick={onSubmit}>=</button>

        </div>
    )
}

export default Calculator