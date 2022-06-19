import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Anuncio from './pages/telaanuncio';
import Login from './pages/login';
import Publicar from './pages/publicar';
import Cadastro from './pages/cadastro';
import Usuario from './pages/menuusuario';
import Home from './pages/teladeinicio';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>;
        <Route path='/login' element={<Login/>}/>;
        <Route path='/cadastro' element={<Cadastro/>}/>;
        <Route path='/usuario' element={<Usuario/>}/>;
        <Route path='/publicar' element={<Publicar/>}/>;
        <Route path='/alterar/:idParam' element={<Publicar/>}/>;

        <Route path='/anuncio' element={<Anuncio/>}/>;
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
