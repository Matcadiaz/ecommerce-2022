
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/cartContext';
import Carru from './components/carousel/Carousel';
import Footer from './components/Footer/Footer';


function App() {

  return (
  
    <BrowserRouter>
      <CartProvider>
        <>
        <NavBar />
        <Carru />
          <Routes>
          <Route path='/' element={<ItemListContainer greeting={"BIENVENIDOS A GALACTUS GAMING"} />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"GALACTUS GAMING"}/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Checkout' element={<Checkout/>}></Route>
          </Routes> 
          <Footer />
        </>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
