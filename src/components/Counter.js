import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import {GrFormSubtract} from 'react-icons/gr';

const Counter = () => {
    
    const [count, setCount] = useState(0);
   
    const less = () =>{
        setCount(
              count - 1  
        );
    };

    const addOn = () => {
        setCount(count + 1)
    };

    return (
        <div className='buttonAddLess'>
            <button onClick={less} style={{border: "1px solid red"}}>
                <GrFormSubtract />
            </button>
            <div>
                {count}
            </div>
            <button onClick={addOn}>
                <GrAdd style={{size:"5 rem"}}/>
            </button>
        </div>
    )

}

export default Counter;