import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 👈 importá esto
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/masajes.equilibrio"> {/* 👈 AÑADÍ ESTO */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
