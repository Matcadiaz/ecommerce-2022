import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css'




const ItemDetailContainer = () => {
  const [product , setProduct] = useState();
  const { id } = useParams();

  
  useEffect(() => {
    getProduct(id)
    .then((data) => {
      setProduct(data)
    })
    .catch(error => console.warn(error))
  },[id]);
  
    return (
      <Container className="detailContainer">
        <h1>Detalle del Producto</h1>
        {product && <ItemDetail product={product}/>}

      </Container>
      );
}
 
export default ItemDetailContainer;