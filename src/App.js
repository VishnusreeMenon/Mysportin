import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './frontend/src/components/Header'
import Footer from './frontend/src/components/Footer'
import HomeScreen from './frontend/src/screens/HomeScreen'
import ProductScreen from './frontend/src/screens/ProductScreen'
import CartScreen from './frontend/src/screens/CartScreen'
import LoginScreen from './frontend/src/screens/LoginScreen'
import RegisterScreen from './frontend/src/screens/RegisterScreen'
import ProfileScreen from './frontend/src/screens/ProfileScreen'
import ShippingScreen from './frontend/src/screens/ShippingScreen'
import PaymentScreen from './frontend/src/screens/PaymentScreen'
import PlaceOrderScreen from './frontend/src/screens/PlaceOrderScreen'
// import OrderScreen from './frontend/src/screens/OrderScreen'
import UserListScreen from './frontend/src/screens/UserListScreen'
import UserEditScreen from './frontend/src/screens/UserEditScreen'
import ProductListScreen from './frontend/src/screens/ProductListScreen'
import ProductEditScreen from './frontend/src/screens/ProductEditScreen'
import OrderListScreen from './frontend/src/screens/OrderListScreen'
import Home from './frontend/src/screens/home'
import Build from './frontend/src/screens/build'
import Arcade from './frontend/src/screens/arcade'
import Landing from './frontend/src/screens/landing'
import Test from './frontend/src/screens/test'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main className="py-3">
        <Routes>
          <Route path='/' element={<Landing/>} exact />
          <Route path='/test' element={<Test/>} exact />
          <Route path='/homepage' element={<Home/>} exact />
          <Route path='/home' element={<Home/>} exact />

          <Route path='/login' element={<LoginScreen/>} />
          <Route path = '/build' element = {<Build/>}/>
          <Route path ='/arcade' element = {<Arcade/>}/>
          <Route path='/register' element={<RegisterScreen/>} />
          <Route path='/profile' element={<ProfileScreen/>} />
          <Route path='/shipping' element={ShippingScreen} />
          <Route path='/placeorder' element={PlaceOrderScreen} />
          {/* <Route path='/order/:id' element={OrderScreen} /> */}
          <Route path='/payment' element={PaymentScreen} />
          <Route path='/product/:id' element={<ProductScreen/>} />
          <Route path='/cart/:id/:qty' element={<CartScreen/>} />
          <Route path='/cart/:id?' element={<CartScreen/>} />  

          <Route path='/admin/userlist' element={UserListScreen} />
          <Route path='/admin/user/:id/edit' element={UserEditScreen} />

          {/* Admin Routes */}
          <Route path='/admin/productlist' element={<ProductListScreen/>} />
          <Route path='/admin/productlist/:keyword' element={<ProductListScreen/>} />
          <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
          <Route path='/admin/orderlist' element={OrderListScreen} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
