
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    
    <BrowserRouter>
      <NavBar />;
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi pagina'}/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi pagina'}/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>


      </Routes> 

      
    </BrowserRouter>
  )
}    

export default App;
