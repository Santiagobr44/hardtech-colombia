import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FiltersProvider } from './context/FiltersContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
