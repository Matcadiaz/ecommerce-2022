import { useContext, useState } from "react";
import { Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import ItemCount from "../itemCount/ItemCount"
import './ItemDetail.css'




const ItemDetail  = ( {product} ) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);
  

    const handleAdd = (value) => {
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    }
    
    
return ( 
    <>
        <Card className="cardStyle">
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body >
                <Card.Title>${product.price} </Card.Title>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
                <div>
                    <div className='itemDetailContainer'>
                    {
                        showItemCount && (
                            <ItemCount initial={1} stock={10} onAdd={handleAdd}></ItemCount>
                        )
                    }
                    {
                        !showItemCount && (
                            <Link to='/cart'>
                                <Button className='addCartButton' variant="success">Ir al carrito</Button>
                            </Link>
                        )
                    }
                    </div>
                </div>
            </Card.Body>
        </Card>
    </>   
    );
}
 
export default ItemDetail;