import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home,
  Products,
  Cart,
  Checkout,
  Product,
  Errorpage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id">
          {' '}
          <Product />
        </Route>
        <Route path="*" component={Errorpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
