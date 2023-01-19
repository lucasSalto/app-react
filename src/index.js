import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';


//import App from './App';
import NavBar from './components/navbar/NavBar.js';
import Footer from './components/footer/Footer.js';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer.js';
import Home from './components/home/Home.js'
import Nosotros from './components/nosotros/Nosotros.js'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailConteiner';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <NavBar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/productos' element={<ItemListContainer greeting="txt-produtos"/>}/>
          <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>
          <Route exact path='/nosotros' element={<Nosotros/>}/>
 
        </Routes>

      <Footer/> 
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
