import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Shared/Footer/Footer';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <main className="App bg-byteware-dark-blue min-h-screen font-poppins">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/inventory/:id' element={<Inventory />} />
        <Route path='/manageInventory' element={<ManageInventory />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
