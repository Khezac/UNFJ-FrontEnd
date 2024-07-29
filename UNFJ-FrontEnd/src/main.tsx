import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {
  BrowserRouter,
} from "react-router-dom";
import { Rotas } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
