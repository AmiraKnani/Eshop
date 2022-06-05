import './App.css';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import { Switch, Route } from "react-router-dom";
import Products from "./Component/Products";
import Product from './Component/Product';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Sign from './Component/Sign';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import About from './Component/About';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Sign} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
