import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//! (USUALLY) NEVER TOUCH the main.jsx
createRoot(document.getElementById('root')).render(
  //! Below these elements are referred as "Functional Components"
  <StrictMode>
    <App />
  </StrictMode>,
)
