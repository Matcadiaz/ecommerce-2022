import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext';

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext);
    
    return (  
        <>
            <Link to='/cart'>
                <AiOutlineShoppingCart color="white" size="2em" />
                {totalQuantity > 0 &&(
                    <Badge pill bg="secondary">{totalQuantity}</Badge>
                )}            
            </Link>
        </>
        
    )
}
 
export default CartWidget;