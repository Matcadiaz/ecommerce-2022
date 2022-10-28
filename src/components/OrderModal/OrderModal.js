
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OrderModal.css'


const OrderModal = ({user ,setUser, showModal, onClose, onBuy, orderId}) => {
   

    const handleChange = ({target:{value}},field) =>{
        if(field === "name"){
            setUser({
                ...user,
                name: value    
            })
        }
        if(field === "phone"){
            setUser({
                ...user,
                phone: value    
            })
        }
        if(field === "mail"){
            setUser({
                ...user,
                mail: value    
            })}
        if(field === "validateMail"){
            setUser({
                ...user,
                validateMail: value    
        })}
    
    }


    const isDisabled = user.name ==='' || user.mail ==='' || user.phone ==='' || user.validateMail ===''
   

    return ( 
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar compra</Modal.Title>
            </Modal.Header>
                <Modal.Body className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" 
                            
                            pattern="[a-zA-Z][a-zA-Z ]{2,}" 
                            placeholder="Ingrese un nombre" 
                            onChange={(e) => handleChange(e,"name")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" 
                           
                            pattern="[0-9]*" 
                            placeholder="Ingrese un teléfono" 
                            onChange={(e) => handleChange(e,"phone")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Direccion de mail</Form.Label> 
                            <Form.Control type="email" 
                            
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" 
                            placeholder="Ingrese un email" 
                            onChange={(e) => handleChange(e,"mail")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Repetir dirección de mail</Form.Label>
                        <Form.Control type="email" 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" 
                            placeholder="Repita su email" 
                            onChange={(e) => handleChange(e,"validateMail")}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    {!orderId && (
                    <>
                        <Button variant="secondary" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button 
                        disabled={isDisabled}
                        variant="primary" onClick={onBuy}>
                            Comprar
                        </Button>
                    </>
                    )}
                    {orderId && (
                        <div className="footerOrderSuccess">
                            <Alert key="success" variant="success">
                                Se ha generado su orden: {orderId}, muchas gracias por su compra!
                            </Alert>
                            <Link to='/'>
                                <Button variant="success">
                                    Comprar nuevamente
                                </Button>
                            </Link>

                        </div>
                    )}
            </Modal.Footer>
        </Modal>
     );
}
 
export default OrderModal;
