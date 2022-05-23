import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';

// componentes
import NavBar from "./sections/NavBar/NavBar";
import Footer from './sections/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
      <App />
    <Footer/>
  </React.StrictMode>
);

