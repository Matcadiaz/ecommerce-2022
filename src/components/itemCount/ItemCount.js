import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { GrAdd } from 'react-icons/gr';
import {GrFormSubtract} from 'react-icons/gr';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
    
    const [count, setCount] = useState(parseInt(initial));
   
    const handleSubstract = () =>{
        setCount(count - 1);
    };

    const handleAdd = () => {
        setCount(count + 1)
    };

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])


    return (
        <div className='counterButtons'>
                <div>
                    <Button variant="primary" onClick={handleSubstract} disabled={count <= 1} style={{border: "1px solid red"}}>
                        <GrFormSubtract />
                    </Button>
                </div>
                <div className='spanCount'>
                    <span>
                        {count}
                    </span>
                </div>
                <div>
                    <Button variant="primary" onClick={handleAdd} disabled={count >= stock}>
                        <GrAdd/>
                    </Button>
                </div>
                
                <div>
                    <Button  variant="primary" disabled={stock <= 0} onClick={handleClick}>
                        Agregar al carrito
                    </Button>
                </div>
            
        </div>
    )

}

export default ItemCount;