import { Toaster } from 'sonner'
import { Route, Switch } from 'wouter'
import './App.css'
import { HomePage } from './components/HomaPage'
import ProductDetailPage from './modules/Products/components/ProductDetailPage'
//import { IS_DEVELOPMENT } from './config.js'

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage}></Route>
      <Route path="/product/:id" component={ProductDetailPage} />
      <Toaster richColors />
    </Switch>
  )
}

export default App
