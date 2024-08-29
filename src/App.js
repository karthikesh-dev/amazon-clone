import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
