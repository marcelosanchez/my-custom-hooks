import { useState } from 'react'

export const useCounter = ( initalState = 10 ) => {
    const [counter, setCounter] = useState(initalState);

    const increment = ( ) => {
        setCounter( counter + 1 );
    };
    
    const decrement = ( ) => {
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( counter );
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}
