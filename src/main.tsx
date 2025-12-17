import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Produtos } from './pages/Produtos'
import { Galeria } from './pages/Galeria'
import {Contato} from './pages/Contato'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/produtos' element={<Produtos/>}></Route>
      <Route path='/galeria' element={<Galeria/>}></Route>
      <Route path='/contato' element={<Contato/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
