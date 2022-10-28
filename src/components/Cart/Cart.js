import { useContext, useState } from "react";
import { Button, Container, Table } from 'react-bootstrap';
import CartContext from "../../context/cartContext";
import { FaTrashRestore } from 'react-icons/fa'
import { Link } from "react-router-dom";
import createOrder from "../OrderModal/order";
import OrderModal from "../OrderModal/OrderModal";
import './Cart.css'


const Cart = () => {

    const { cart, total, removeItem, clear} = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();
    const [user, setUser] = useState({
        name:'',
        phone:'',
        mail:'',
        validateMail:''
    })
    
    const handleRemove = (itemId) =>{
        removeItem(itemId);
    }

    const handleOpen = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    const handleBuy = async () => {
        const newOrder = {
            buyer: user,
            items: cart,
            total
        };
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        clear(); 
    }
    
    const showTable = cart.length > 0;

    return ( 
        <Container className="cartContainer">
            <h1>Carrito de compras</h1>
            { showTable && (
                <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>DESCRIPCION</th>
                            <th>IMAGEN</th>
                            <th>CANTIDAD</th>
                            <th>PRECIO</th>
                            <th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) =>  (
                            <tr className="itemTable" 
                            key={item.id}>
                                <td valign="middle">{item.description}</td>
                                <img src={item.pictureUrl}/>
                                <td valign="middle">{item.quantity}</td>
                                <td valign="middle">{item.price}</td>
                                <td valign="middle"><FaTrashRestore onClick ={() => handleRemove(item.id)} /></td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                    <h3>Total: ${total}</h3>
                    <div className="cartButtons">
                        <div>
                            <Link to={"/"}>
                                <Button variant="primary" size="xxl" >Seguir comprando</Button>
                            </Link>
                        </div>
                        <Button variant="success" onClick={handleOpen}>Finalizar Compra</Button>
                    </div>
                </>
            )}

            {!showTable && (
                <Container className="emptyCart">
                    <h3>
                        ¡El carrito se encuentra vacío!
                    </h3>
                    <div><img src="https://th.bing.com/th/id/R.f46d1b305a11cb303424d71f1db56905?rik=%2bovsG7Q4mKQS2A&riu=http%3a%2f%2fferreteriataximaroa.com.mx%2fassets%2fimages%2fcarrito-vacio.jpg&ehk=hQXCTf97KugbC78G7UEhVOgAuyBxbaysslqw1%2b8F7R0%3d&risl=&pid=ImgRaw&r=0" alt="carrito vacio"/></div>
                    <Link to='/'>
                        <Button variant="primary">Ver productos</Button>
                    </Link>
                </Container>
            )}
            <OrderModal 
                showModal={showModal} 
                onClose={handleClose} 
                onBuy={handleBuy} 
                orderId={orderId}
                setUser={setUser}
                user={user}
            />
        </Container>
     );
}
 
export default Cart;
