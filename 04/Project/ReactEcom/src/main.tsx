import './index.css'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { FilterProvider } from './components/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilterProvider>
    <App />
    </FilterProvider>
  </React.StrictMode>,
)
