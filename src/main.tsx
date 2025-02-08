import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import'./component/card.css'
import './component/navv.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
