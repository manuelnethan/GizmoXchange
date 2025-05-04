import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproduct from './Components/Addproduct';
import Getproducts from './Components/Getproducts';
import Makepayments from './Components/Makepayments';
import Dashboard from './Components/Dashboard';
import UserProducts from './Components/UserProducts';
import ProtectedRoute from './Components/ProtectedRoute';
import AboutUs from './Components/AboutUs';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Makepayments />} />
          <Route path='/' element={<Getproducts />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/userproducts' element={<UserProducts />} />
          <Route path='/protectedRoute' element={<ProtectedRoute />} />
          
          
          <Route path='/aboutus' element={<AboutUs />} />
          <Route
            path="/userproducts"
            element={
              <ProtectedRoute>
                <UserProducts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
