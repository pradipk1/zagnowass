// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom'
import Product from './components/Product';
import Payment from './components/Payment';
import Processing from './components/Processing';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/processing' element={<Processing />}/>
        <Route path='/success' element={<PaymentSuccess />}/>
      </Routes>
    </>
  );
}

export default App;
