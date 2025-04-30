import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './login-page/login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>

    <BrowserRouter>
    <LoginPage/>
    </BrowserRouter>
    </RecoilRoot>

  </StrictMode>,
)
