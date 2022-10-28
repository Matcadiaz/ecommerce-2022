import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <Card className='cardItem' hover>
        <Card.Img variant="top" src={product.pictureUrl} />
        <Card.Body className='itemCardBody'>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Card.Title>${product.price}</Card.Title>
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">
              Ver detalles
            </Button>
          </Link>          
          
        </Card.Body>
      </Card>
      );
}
 
export default Item;