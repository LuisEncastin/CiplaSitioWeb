// Router
import {BrowserRouter, Routes, Route } from "react-router-dom";

// styles
// import './styles/bootstrap.css'
import '../styles/index.css';

// Components
import Home from '../pages/Home/Home';


function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>

  );
}

export default App;