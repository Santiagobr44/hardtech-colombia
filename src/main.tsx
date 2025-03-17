import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import { FiltersProvider } from './context/FiltersContext.tsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
