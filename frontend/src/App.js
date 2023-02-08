import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
// import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import Home from './screens/home'
import Build from './screens/build'
import Arcade from './screens/arcade'
import Landing from './screens/landing'
import Test from './screens/test'

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
