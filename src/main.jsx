import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from "./components/navbar";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App/>
  </StrictMode>,
)
