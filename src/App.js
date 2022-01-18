import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './Component/Product/ProductDetails';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Contact from './Component/Contact/Contact';
import './App.css';
//import { Experiment } from './Component/experiment';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/product/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
