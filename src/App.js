import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReviews from './Pages/Dashboard/AddReviews';
import RequireAuth from './Pages/Auth/RequireAuth'
import Purchase from './Pages/Purchase/Purchase';
import ShopPurchase from './Pages/Purchase/ShopPurchase';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Payment from './Pages/Dashboard/Payment';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import AllProduct from './Pages/Shop/AllProduct';
import Bedroom from './Pages/Shop/Category/Bedroom';
import Ceiling from './Pages/Shop/Category/Ceiling';
import Table from './Pages/Shop/Category/Table';
import Floor from './Pages/Shop/Category/Floor';
import LampSet from './Pages/Shop/Category/LampSet';
import Restaurant from './Pages/Shop/Category/Restaurant';

function App() {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />} >
          <Route index element={<AllProduct></AllProduct>}></Route>
          <Route path="bedroom" element={<Bedroom></Bedroom>}></Route>
          <Route path="ceiling" element={<Ceiling></Ceiling>}></Route>
          <Route path="table" element={<Table></Table>}></Route>
          <Route path="floor" element={<Floor></Floor>}></Route>
          <Route path="lampSet" element={<LampSet></LampSet>}></Route>
          <Route path="restaurant" element={<Restaurant></Restaurant>}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReviews></AddReviews>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manageOrders" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/shopPurchase/:id" element={
          <RequireAuth>
            <ShopPurchase />
          </RequireAuth>
        } />
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
