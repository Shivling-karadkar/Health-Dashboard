import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import Header from 'C:\\Users\\Asus\\OneDrive\\Desktop\\healthcare\\src\\components\\Header\\Header.js';
import Header from './components/Header/Header';

import Home from "./components/Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
