import './App.css';
import { ToastContainer} from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Nav/>
      <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
