import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home, Products, Cart, Checkout,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
