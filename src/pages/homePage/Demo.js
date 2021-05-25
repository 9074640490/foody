import React, { useState, useEffect } from 'react'


const Demo = () => {
    //state      //updateState       //useState default value
    const [counterValue, setCounterValue] = useState(0)
    //use state is used for setting up some values, we can update the state by updating the state function



    //WHEN A PAGE LOADS ,WE NEED TO DO SOME THING TO SHOW ie,useEffect
    useEffect(() => {
        setCounterValue('podi patty')
    }, [])




    const pleaseIncrement = () => {
        if (counterValue < 10) {
            setCounterValue(counterValue + 1)
        }
    }
    const pleaseDecrement = () => {
        if (counterValue > 0) {
            setCounterValue(counterValue - 1)
        }
    }
    // const pleaseReset = () => { setCounterValue(0) }


    return (
        <div>
            <button onClick={pleaseIncrement}>increment</button>
            <div>{counterValue}</div>
            <button onClick={pleaseDecrement}>decrement</button>
            <div />
            <button onClick={() => setCounterValue(0)}>reset</button>
        </div>
    )


}


export default Demo