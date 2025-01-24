
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Footter from './components/Footer';
import SignUp from './components/signUp';
import PrivateComponent from './components/privateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductListt from './components/ProductListt';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element ={<PrivateComponent/>}>
        < Route path="/" element={<ProductListt/>}/>
        < Route path="/add" element={<AddProduct/>}/>
        < Route path="/update/:id" element={<UpdateProduct/>}/>
        < Route path="/logout" element={<h1>Logout Component</h1>}/>
        < Route path="/profile" element={<h1>Profile Component</h1>}/>
        
        </Route>
        <Route path="/login"element={<Login/>}/>

        < Route path="/SignUp" element={<SignUp/>}/>
        
      </Routes>
      </BrowserRouter>
      <Footter/>
    </div>
  );
}

export default App;
