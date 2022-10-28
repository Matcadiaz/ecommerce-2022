import { addDoc, collection, getFirestore } from "firebase/firestore";

const createOrder = (newOrder) => {
    const database = getFirestore();

    const colletionReference = collection(database, 'orders');

    return addDoc(colletionReference, newOrder)
    .then((snapshot) => snapshot.id)
    .catch(error => console.warn(error))
}
 
export default createOrder;