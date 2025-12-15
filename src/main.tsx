import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { Produtos } from './pages/Produtos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/produtos' element={<Produtos/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
