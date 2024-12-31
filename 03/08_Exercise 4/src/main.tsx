import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import MyProvider from "./context/mycontext"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </StrictMode>,
)
