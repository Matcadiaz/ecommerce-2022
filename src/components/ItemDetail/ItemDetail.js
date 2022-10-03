import ItemCount from "../ItemCount";
import Item from "../ItemList/Item";


const ItemDetail  = ( {product} ) => {
    return ( 
        <>
        <Item product={product}/>
        <ItemCount></ItemCount>
        </>
     );
}
 
export default ItemDetail;